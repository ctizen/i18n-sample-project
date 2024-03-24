import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import Sample from './Sample';
import {embraceWithCode, getRandomTitle, i18n, i18nCtrl} from "./utils";

export default function App() {
  const [samples, setSamples] = useState([]);
  const [loadedLocale, setLoadedLocale] = useState('en');

  const handleAddSample = () => {
    setSamples((s) => s.concat([getRandomTitle()]))
  };

  const loadRussianLocale = () => {
    i18nCtrl.setLocale('ru', (localeName) => {
      setLoadedLocale(localeName);
    }, (error) => console.log(error));
  };

  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <h2>{i18n._t('Welcome to React')}</h2>
      </div>
      <p className="App-intro">
        {embraceWithCode(i18n._t('To get started, edit `src/App.js` and save to reload.'))}
      </p>
      <div>
        <button onClick={handleAddSample}>{i18n._t('Add new sample block!')}</button>
        {
          loadedLocale !== 'ru'
              ? <button onClick={loadRussianLocale}>{i18n._t('Load Russian locale')}</button>
              : null
        }
        <div>{i18n._nt([
          'Now we have %% component on page!',
          'Now we have %% components on page!'
        ], samples.length)}</div>
        <div>{i18n._ngg([
          'This counter of %% component will not be translated',
          'This counter of %% components will not be translated'
        ], samples.length)}</div>
      </div>
      <div>
        {/*
             Note: addTitles inside Sample components will not be updated
             on locale change, because their values are stored in parent
             component's local state.
        */}
        {samples.map((value, idx) => <Sample key={idx} addTitle={value}/>)}
      </div>
    </div>
  );
}
