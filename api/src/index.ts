import { app } from '@azure/functions';

// 関数をインポート
import './functions/message';

app.setup({
    enableHttpStream: true,
});
