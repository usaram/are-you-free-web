.PHONY: build format lint codegen

install:
	pnpm install $(filter-out $@,$(MAKECMDGOALS))

add-d:
	pnpm add -D $(filter-out $@,$(MAKECMDGOALS))

remove:
	pnpm remove $(filter-out $@,$(MAKECMDGOALS))

build:
	pnpm run build

format:
	pnpm run format

lint:
	pnpm run lint:fix

cache-clear:
	rm -rf node_modules
	rm pnpm-lock.yaml
	pnpm store prune

codegen:
	pnpm run codegen
