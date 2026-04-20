PORT ?= 8080
SITE_DIR := site

.PHONY: serve check deploy

serve:
	python3 -m http.server $(PORT) --directory $(SITE_DIR)

check:
	test -f $(SITE_DIR)/index.html
	test -f $(SITE_DIR)/assets/styles.css
	test -f $(SITE_DIR)/assets/app.js
	test -f .github/workflows/pages.yml

deploy:
	git push origin main
