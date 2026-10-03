## 官網固定維護模式（使用者確認）

- 本專案固定用於邱建富官網維護。外部媒體影片放在「最新消息與相關報導」；「影音專區」留給團隊自製影片。
- 影片報導採用固定範本：中性且清楚的標題、簡短且可核實的介紹、來源資訊、可直接播放的嵌入影片，以及前往原始平台的備用連結。
- 首頁消息區和消息列表必須直接顯示影片播放器，不必先點「閱讀更多」進入文章。顯示區長寬比固定為 3:4，隨手機及桌面寬度調整；直接顯示不代表自動播放或自動開啟聲音。
- 目前 NewsCard 共用元件支援 Facebook videos、reel 及 watch 影片連結。新增其他平台或網址形式時應先確認嵌入支援，不可假設所有連結都已支援。
- 保留文章詳細頁、來源連結及文字報導的閱讀入口。照片目前僅在文章內顯示；不可聲稱照片卡片也已更新。
- 使用者已授權後續要求的修改完成檢查後直接發布官網；若當次要求先討論或預覽，須等確認。
- 修改前先檢查選單、首頁區塊、列表、文章及手機版的連動範圍，避免只改一處。分區服務的選單及首頁八大生活圈、地圖、分區卡片已移除，不應自行加回。
- 共同編輯前先同步遠端並檢查差異，避免覆蓋其他編輯者的修改。發布後確認部署成功及正式頁面顯示、播放正常。

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
