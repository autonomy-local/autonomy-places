# autonomy-places
🏘️居場所マネジメントサービス

# アプリケーション構成

| App | Hosting | URL |
|:--|:--|:--|
| LP | autonomy-places-dev | https://autonomy-places-dev.web.app/ |
| プロダクト管理者用App | autonomy-places-dev-console | https://autonomy-places-dev-console.web.app/ |
| ユーザー用App | autonomy-places-dev-customer | |
| 提供者用App | autonomy-places-dev-tenant | https://autonomy-places-dev-tenant.firebaseapp.com/ |
| 窓口用App | autonomy-places-dev-counter | |

# 各アプリケーション

## LP
- 対象ユーザー：一般ユーザー(anonymous)
### WIP
情報提供が主たる目的、不特定多数が閲覧可能、静的なコンテンツのみ、認証不要

## プロダクト管理者用App
- 対象ユーザー：プロダクト管理者(serviceProvider)
### WIP
プロダクト管理者が管理するためのアプリケーション、認証が必要
- Tenant管理(landlordアカウントを払い出す)
- プロダクトの利用状況確認

## ユーザー用App
- 対象ユーザー：一般ユーザー(customer)
### WIP
一般ユーザーが利用するためのアプリケーション、認証が必要
- 利用者登録
- 利用申請
- 利用状況確認
- 各種報告


## 提供者用App
- 対象ユーザー：提供者(landlord)
### WIP
提供者が利用するためのアプリケーション、認証が必要
- 提供者登録
- 管理施設の追加
- 利用者の承認
- 利用状況確認
- 各種報告



## 窓口用App
- 対象ユーザー：窓口(counter)
### WIP
窓口が利用するためのアプリケーション、認証が必要
- 窓口登録
- 利用申請
