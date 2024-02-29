install:
	npm ci

gendiff:
	node bin/gendiff.js -h

publish:
	npm publish --dry-run

lint-fix:
	npx eslint --fix .

lint:
	npx eslint .

test:
	npx jest

test-coverage:
	npx jest --coverage

.PHONY: test