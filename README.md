# Site institucional Descontado

SPA institucional estática, responsiva e sem dependências de build. Apresenta a proposta do
Descontado, as etapas do fluxo de ofertas afiliadas, os princípios de transparência e o estágio
de evolução do MVP.

## Executar localmente

Abra `index.html` no navegador ou inicie um servidor local na pasta do site:

```powershell
python -m http.server 4173
```

Depois acesse `http://localhost:4173`.

## Conteúdo

- `index.html`: estrutura e conteúdo em português.
- `styles.css`: identidade visual, layout responsivo e acessibilidade.
- `script.js`: navegação mobile e atualização do ano no rodapé.
- `assets/`: imagens da marca e dos materiais visuais do projeto.

## SEO e analytics

- `index.html` inclui description, keywords, canonical, Open Graph, Twitter Card, JSON-LD e o
  Google Tag Manager `GTM-TD7VSH2W`.
- `site.webmanifest` e `assets/og-descontado.jpg` (1200x630, imagem de prévia leve para
  redes sociais) complementam o SEO e o compartilhamento.
- `robots.txt` e `sitemap.xml` o domínio `https://descontado.lppjunior.com/`; ajuste-os (e a
  canonical/OG no `index.html`) se o domínio for outro.

O conteúdo descreve o escopo planejado sem apresentar recursos do MVP ainda em desenvolvimento
como funcionalidades já disponíveis. A navegação entre seções é feita na própria página.
