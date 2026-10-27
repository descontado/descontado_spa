# descontado_spa

Site institucional do Descontado: uma página estática, responsiva e sem etapa de build.

## Responsabilidade

- Apresenta a proposta do Descontado, as etapas do fluxo de ofertas afiliadas, os princípios de
  transparência e o estágio de evolução do MVP.
- Descreve o escopo planejado sem apresentar recursos ainda em desenvolvimento como já disponíveis.
  A navegação entre seções é feita na própria página.

Não faz parte deste projeto: nenhuma integração com os serviços do Descontado. O site não chama APIs.

### SEO e analytics

- `index.html` inclui description, keywords, canonical, Open Graph, Twitter Card, JSON-LD e o Google
  Tag Manager `GTM-TD7VSH2W`.
- `site.webmanifest` e `assets/og-descontado.jpg` (1200x630, prévia leve para redes sociais)
  complementam o SEO e o compartilhamento.
- `robots.txt` e `sitemap.xml` usam o domínio `https://descontado.lppjunior.com/`; ajuste-os (e a
  canonical e o Open Graph no `index.html`) se o domínio for outro.
- `BingSiteAuth.xml` confirma a propriedade do site no Bing Webmaster Tools.

## Requisitos

- Um navegador. Não usa Node.js nem npm.
- Python 3, só para servir o site localmente (opcional).

## Configuração

Não há variáveis de ambiente nem configuração: os valores de SEO e o domínio ficam nos próprios
arquivos (`index.html`, `robots.txt`, `sitemap.xml`).

## Executar

Abra `index.html` no navegador ou sirva a pasta:

```powershell
python -m http.server 4173
```

Depois acesse `http://localhost:4173`.

## Testes

Não há testes automatizados. Confira o layout em larguras de celular e desktop e a prévia de
compartilhamento antes de publicar.

## Estrutura

```text
index.html          Estrutura e conteúdo, em português
styles.css          Identidade visual, layout responsivo e acessibilidade
script.js           Navegação no celular e ano do rodapé
assets/             Imagens da marca e dos materiais visuais
site.webmanifest    Manifesto do site (ícones e nome)
robots.txt          Regras para buscadores
sitemap.xml         Mapa do site
BingSiteAuth.xml    Verificação do Bing Webmaster Tools
favicon.ico, apple-touch-icon.png
```

---

Copyright (c) 2026 UPDN Tecnologia da Informação. Todos os direitos reservados.

É proibida a reprodução, distribuição ou alteração deste código sem autorização expressa do autor.
