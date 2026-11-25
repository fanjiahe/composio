---
'@composio/core': patch
---

Type `FileDownloadData.filePath` as `string | null` and remove the unsafe cast in `downloadFileFromS3` when `saveFile` returns `null`.
