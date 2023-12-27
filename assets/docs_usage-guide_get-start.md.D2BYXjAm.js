import{_ as i,a as r,b as s,c,d as l,e as n,f as p,g as d,h as g,i as u,j as h,k as m}from"./chunks/img-14.0glRcSBb.js";import{_,a as b}from"./chunks/img-16.pClaJa1Y.js";import{_ as P,D as k,o as f,c as q,k as e,a as t,I as G,R as a}from"./chunks/framework.I4mYQgvl.js";const H="/assets/img-12.We_ucEPg.png",x="/assets/img-13.8JLU6u43.png",T="/assets/picx-quick-start.HLr3mXu4.gif",R=JSON.parse('{"title":"快速开始","description":"","frontmatter":{},"headers":[{"level":2,"title":"登录 PicX","slug":"登录-picx","link":"#登录-picx","children":[]},{"level":2,"title":"配置图床","slug":"配置图床","link":"#配置图床","children":[]},{"level":2,"title":"上传图片","slug":"上传图片","link":"#上传图片","children":[]},{"level":2,"title":"动图演示","slug":"动图演示","link":"#动图演示","children":[]}],"relativePath":"docs/usage-guide/get-start.md","filePath":"docs/usage-guide/get-start.md","lastUpdated":1703651438000}'),A={name:"docs/usage-guide/get-start.md"},X=a('<h1 id="快速开始" tabindex="-1">快速开始 <a class="header-anchor" href="#快速开始" aria-label="Permalink to &quot;快速开始&quot;">​</a></h1><h2 id="登录-picx" tabindex="-1">登录 PicX <a class="header-anchor" href="#登录-picx" aria-label="Permalink to &quot;登录 PicX&quot;">​</a></h2><p>PicX 的图片上传和图床管理功能是基于 GitHub API 实现的，你需要登录 GitHub 账号到 PicX 才能使用图床服务功能。</p><p>支持 <strong><code>GitHub OAuth 授权登录</code></strong> 和 <strong><code>填写 GitHub Token 登录</code></strong> 这两种方式。</p><h3 id="github-oauth-授权登录" tabindex="-1">GitHub OAuth 授权登录 <a class="header-anchor" href="#github-oauth-授权登录" aria-label="Permalink to &quot;GitHub OAuth 授权登录&quot;">​</a></h3><ol><li><p>安装 PicX GitHub APP</p><p><strong>使用 GitHub OAuth 授权登录必须先安装 PicX GitHub APP，否则没有操作权限。</strong></p><p>如下图，点击 <strong><code>安装 PicX GitHub APP</code></strong> 立即跳转到 GitHub APP 安装页面：</p><p><img src="'+i+'" alt="image"></p><p><img src="'+r+'" alt="image"></p><p><img src="'+s+'" alt="image"></p><p>PicX GitHub APP 只需要安装一次，安装成功后，会自动跳转回到 PicX 登录页，并进行是否授权登录的询问。</p><p><img src="'+c+'" alt="image"></p></li><li><p>GitHub OAuth 授权登录</p><p>PicX GitHub APP 安装成功之后，你可以在消息提示框点击 <code>确定</code> 或者手动点击 <code>GitHub OAuth 授权登录</code> 按钮，进行授权登录。</p><p><img src="'+l+'" alt="image"></p><p><img src="'+n+'" alt="image"></p><p><img src="'+p+'" alt="image"></p><p><img src="'+d+'" alt="image"></p></li><li><p>自动完成图床配置</p><p>在 GitHub OAuth 授权登录成功之后，PicX 会自动完成该用户的图床配置，并跳转到图片上传页面。</p></li></ol><br><h3 id="填写-github-token-登录" tabindex="-1">填写 GitHub Token 登录 <a class="header-anchor" href="#填写-github-token-登录" aria-label="Permalink to &quot;填写 GitHub Token 登录&quot;">​</a></h3><ol><li><p>创建一个带有 <code>repo</code> 权限的 GitHub Token</p><p>点击 <a href="https://github.com/settings/tokens/new" target="_blank" rel="noreferrer">https://github.com/settings/tokens/new</a> 快速新建 GitHub Token</p><p><img src="'+g+'" alt="image"></p><p>点击 <strong><code>Generate token</code></strong> 按钮，生成 GitHub Token。</p><p><img src="'+u+'" alt="image"></p><p><img src="'+h+'" alt="image"></p><div class="warning custom-block"><p class="custom-block-title">注意</p><p><strong>新生成的 Token 只会显示一次，请妥善保存，如有遗失，重新生成即可。</strong></p></div></li><li><p>使用创建的 GitHub Token 完成登录和图床配置</p></li></ol><br><h2 id="配置图床" tabindex="-1">配置图床 <a class="header-anchor" href="#配置图床" aria-label="Permalink to &quot;配置图床&quot;">​</a></h2>',11),V={id:"一键自动配置",tabindex:"-1"},C=e("a",{class:"header-anchor",href:"#一键自动配置","aria-label":'Permalink to "一键自动配置 <Badge text="推荐" />"'},"​",-1),S=a('<p>填写 GitHub Token，点击 <strong><code>一键自动配置</code></strong> 按钮会自动创建 GitHub 仓库，并完成仓库、分支和目录之间的绑定。</p><blockquote><ul><li>自动创建仓库：<code>picx-images-hosting</code></li><li>自动创建分支：<code>master</code></li><li>自动创建目录：<code>yyyyMMdd</code> (当天日期，例如：<code>20230403</code>)</li></ul></blockquote><p><strong>如果你是第一次使用 PicX，那么推荐使用一键自动配置，非常方便</strong>。当然你也可以随时切换成手动配置。</p><p><img src="'+H+'" alt="image"></p><h3 id="手动配置" tabindex="-1">手动配置 <a class="header-anchor" href="#手动配置" aria-label="Permalink to &quot;手动配置&quot;">​</a></h3><p>对于 PicX 的老用户，或者你准备使用一个已有的 GitHub 仓库做图床，使用手动配置更为灵活。</p><p><img src="'+x+'" alt="image"></p><p>手动配置的详细教程请参考 -&gt; <a href="/docs/usage-guide/config.html#手动配置">图床配置</a></p><br><h2 id="上传图片" tabindex="-1">上传图片 <a class="header-anchor" href="#上传图片" aria-label="Permalink to &quot;上传图片&quot;">​</a></h2><h3 id="选择图片" tabindex="-1">选择图片 <a class="header-anchor" href="#选择图片" aria-label="Permalink to &quot;选择图片&quot;">​</a></h3><ul><li><p>可以通过 <strong>拖拽图片</strong> 到上传区域进行上传。</p></li><li><p>可以通过 <strong>复制图片</strong>，然后 <strong>粘贴</strong> 到上传区域进行上传。</p><blockquote><p>粘贴图片快捷键 <strong><code>Ctrl + V</code></strong> 或 <strong><code>Command + V</code></strong></p></blockquote></li><li><p>可以通过点击上传区域，通过 <strong>选择文件</strong> 的方式选择需要上传的图片。</p></li></ul><p><img src="'+m+'" alt="image"></p><h3 id="上传图片-1" tabindex="-1">上传图片 <a class="header-anchor" href="#上传图片-1" aria-label="Permalink to &quot;上传图片&quot;">​</a></h3><p>点击 <strong><code>上传</code></strong> 按钮或使用 PicX 提供的快捷键 <strong><code>Ctrl + S</code></strong> 或 <strong><code>Command + S</code></strong> 进行上传图片。</p><p><img src="'+_+'" alt="image"></p><h3 id="复制图片链接" tabindex="-1">复制图片链接 <a class="header-anchor" href="#复制图片链接" aria-label="Permalink to &quot;复制图片链接&quot;">​</a></h3><p>图片上传成功后，PicX 会自动复制图片链接到系统剪贴板，你也可以手动点击 <strong><code>复制图片链接</code></strong> ，然后通过快捷键 <strong><code>Ctrl + V</code></strong> 或 <strong><code>Command + V</code></strong> 粘贴使用。</p><p><img src="'+b+'" alt="image"></p><br><h2 id="动图演示" tabindex="-1">动图演示 <a class="header-anchor" href="#动图演示" aria-label="Permalink to &quot;动图演示&quot;">​</a></h2><p>观看下方 GIF 动图，20 秒学会使用 PicX。</p><p><img src="'+T+'" alt="picx-quick-start"></p>',23);function v(O,I,N,B,$,y){const o=k("Badge");return f(),q("div",null,[X,e("h3",V,[t("一键自动配置 "),G(o,{text:"推荐"}),t(),C]),S])}const J=P(A,[["render",v]]);export{R as __pageData,J as default};
