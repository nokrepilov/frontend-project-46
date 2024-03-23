install:
	npm ci

gendiff:
	PATH="$$PATH:./bin" node bin/gendiff.js

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