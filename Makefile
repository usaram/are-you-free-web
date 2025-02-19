.PHONY: build format lint codegen

build:
	pnpm run build

format:
	pnpm run format

lint:
	pnpm run lint:fix

codegen:
	pnpm run codegen
