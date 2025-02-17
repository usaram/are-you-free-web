.PHONY: build format lint codegen

build:
	npm build

format:
	npm format

lint:
	npm lint:fix

codegen:
	npm codegen
