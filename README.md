# DiQi Tech website

Static bilingual portfolio for DiQi Tech L.L.C-FZ. Chinese is the default language, with an English switch and a data-driven project section.

## Local preview

```bash
python3 -m http.server 4173
```

Open <http://127.0.0.1:4173>.

## GitHub Pages

In the repository settings, configure Pages to deploy from the `main` branch and the repository root (`/`). The `CNAME` file declares `diqitech.ai` as the custom domain. After DNS verification and certificate provisioning complete, enable **Enforce HTTPS** in the Pages settings.

The site is dependency-free. Update project records in `projects.json`, keeping Chinese and English fields aligned and claims supported by the relevant repository.
