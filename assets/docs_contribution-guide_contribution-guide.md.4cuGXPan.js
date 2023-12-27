import{_ as t,o as e,c as a,R as l}from"./chunks/framework.I4mYQgvl.js";const g=JSON.parse('{"title":"贡献指南","description":"","frontmatter":{},"headers":[{"level":2,"title":"技术栈","slug":"技术栈","link":"#技术栈","children":[]},{"level":2,"title":"贡献流程","slug":"贡献流程","link":"#贡献流程","children":[]},{"level":2,"title":"代码规范","slug":"代码规范","link":"#代码规范","children":[]},{"level":2,"title":"提交规范","slug":"提交规范","link":"#提交规范","children":[]},{"level":2,"title":"致谢","slug":"致谢","link":"#致谢","children":[]}],"relativePath":"docs/contribution-guide/contribution-guide.md","filePath":"docs/contribution-guide/contribution-guide.md","lastUpdated":1703651438000}'),s={name:"docs/contribution-guide/contribution-guide.md"},i=l(`<h1 id="贡献指南" tabindex="-1">贡献指南 <a class="header-anchor" href="#贡献指南" aria-label="Permalink to &quot;贡献指南&quot;">​</a></h1><p>欢迎小伙伴们各种形式的代码贡献，包括但不限于：美化 UI 界面、增加新功能、性能优化、修复 Bug、完善文档等。</p><h2 id="技术栈" tabindex="-1">技术栈 <a class="header-anchor" href="#技术栈" aria-label="Permalink to &quot;技术栈&quot;">​</a></h2><ul><li>TypeScript v4.x</li><li><a href="https://cn.vitejs.dev/" target="_blank" rel="noreferrer">Vite v2.x</a></li><li><a href="https://cn.vuejs.org/" target="_blank" rel="noreferrer">Vue v3.x</a></li><li><a href="https://vuex.vuejs.org/zh/" target="_blank" rel="noreferrer">Vuex v4.x</a></li><li><a href="https://element-plus.org/zh-CN/" target="_blank" rel="noreferrer">Element Plus v2.x</a></li></ul><p>你只需熟悉以上这些主要的技术栈，便可轻松参与 PicX 的前端项目开发。</p><h2 id="贡献流程" tabindex="-1">贡献流程 <a class="header-anchor" href="#贡献流程" aria-label="Permalink to &quot;贡献流程&quot;">​</a></h2><ol><li>查看 <a href="https://github.com/XPoet/picx/projects/1#column-12772350" target="_blank" rel="noreferrer">PicX To do list</a></li><li>领取对应的 To do</li><li>代码开发 &amp; 自测</li><li>提交 &amp; 发起 PR</li><li>作者合并</li></ol><blockquote><p>参与代码贡献过程中，遇到任何问题都可以随时联系作者寻求技术支持。</p></blockquote><h2 id="代码规范" tabindex="-1">代码规范 <a class="header-anchor" href="#代码规范" aria-label="Permalink to &quot;代码规范&quot;">​</a></h2><p>PicX 项目采用 <a href="https://github.com/airbnb/javascript" target="_blank" rel="noreferrer">Airbnb JavaScript 风格指南</a> 和 <a href="https://cn.vuejs.org/style-guide/" target="_blank" rel="noreferrer">Vue 官方风格指南</a>，使用 ESLint 进行代码规范校验和修复。</p><h2 id="提交规范" tabindex="-1">提交规范 <a class="header-anchor" href="#提交规范" aria-label="Permalink to &quot;提交规范&quot;">​</a></h2><p>PicX 项目使用社区最流行、最知名、最受认可的 Angular 团队代码提交规范。</p><p><code>git commit</code> 格式：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;type&gt;(&lt;scope&gt;): &lt;subject&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="type" tabindex="-1">type <a class="header-anchor" href="#type" aria-label="Permalink to &quot;type&quot;">​</a></h3><p>type 用于说明 commit 的提交类型（必须是以下几种之一）。</p><table><thead><tr><th style="text-align:left;">类型</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">feat</td><td style="text-align:left;">新增一个功能</td></tr><tr><td style="text-align:left;">fix</td><td style="text-align:left;">修复一个 Bug</td></tr><tr><td style="text-align:left;">docs</td><td style="text-align:left;">文档变更</td></tr><tr><td style="text-align:left;">style</td><td style="text-align:left;">代码格式（不影响功能，例如空格、分号等格式修正）</td></tr><tr><td style="text-align:left;">refactor</td><td style="text-align:left;">代码重构</td></tr><tr><td style="text-align:left;">perf</td><td style="text-align:left;">改善性能</td></tr><tr><td style="text-align:left;">test</td><td style="text-align:left;">测试</td></tr><tr><td style="text-align:left;">build</td><td style="text-align:left;">变更项目构建或外部依赖（例如 scopes: webpack、gulp、npm 等）</td></tr><tr><td style="text-align:left;">ci</td><td style="text-align:left;">更改持续集成软件的配置文件和 package 中的 scripts 命令，例如 scopes: Travis, Circle 等</td></tr><tr><td style="text-align:left;">chore</td><td style="text-align:left;">变更构建流程或辅助工具</td></tr><tr><td style="text-align:left;">revert</td><td style="text-align:left;">代码回退</td></tr></tbody></table><h3 id="scope" tabindex="-1">scope <a class="header-anchor" href="#scope" aria-label="Permalink to &quot;scope&quot;">​</a></h3><p>scope 用于指定本次 commit 影响的范围。（可选）</p><h3 id="subject" tabindex="-1">subject <a class="header-anchor" href="#subject" aria-label="Permalink to &quot;subject&quot;">​</a></h3><p>subject 是本次 commit 的简洁描述，长度约定在 50 个字符以内，通常遵循以下几个规范：</p><ul><li>用动词开头，第一人称现在时表述，例如：change 代替 changed 或 changes</li><li>第一个字母小写</li><li>结尾不加句号（.）</li></ul><h3 id="commit-示例" tabindex="-1">commit 示例 <a class="header-anchor" href="#commit-示例" aria-label="Permalink to &quot;commit 示例&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 示例 1</span></span>
<span class="line"><span>perf(upload-image-card): optimize image preview</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 示例 2</span></span>
<span class="line"><span>fix(compile): couple of unit tests for IE9</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 示例 3</span></span>
<span class="line"><span>docs: update README</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><div class="warning custom-block"><p class="custom-block-title">注意</p><p>给 PicX 提 PR 的 git commit 的描述信息<strong>必须使用英文</strong></p></div><h2 id="致谢" tabindex="-1">致谢 <a class="header-anchor" href="#致谢" aria-label="Permalink to &quot;致谢&quot;">​</a></h2><p>这个项目的存在多亏了所有的贡献者：</p><a href="https://github.com/XPoet/picx/graphs/contributors"><img src="https://contrib.rocks/image?repo=XPoet/picx"></a>`,28),n=[i];function r(o,c,p,d,h,u){return e(),a("div",null,n)}const m=t(s,[["render",r]]);export{g as __pageData,m as default};
