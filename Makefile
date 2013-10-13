TESTS = $(shell find test -name "*_test.js")

test:
	mocha $(TESTS)

watch:
	mocha $(TESTS) --watch

.PHONY: test watch

