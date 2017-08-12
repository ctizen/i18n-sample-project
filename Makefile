.PHONY: extract
extract:
	mkdir -p l10n
	./node_modules/.bin/stex -s 'src/**/*.js' -o l10n/extracted.json
	./node_modules/.bin/jsonpo -s l10n/extracted.json -o l10n/messages.pot -p -c 'Test team' -b 'test@l10n.com' -y 2017


