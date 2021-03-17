import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

// yargs の設定
const setting = {
  // オプション
  options: {
    'u': {
      alias: 'user',
      description: 'ログイン名を指定します カンマ区切りで複数指定することも可能です \nexample: --user userA,userB,userC'
    },
    'all-user': {
      description: '全てのユーザーのスケジュールを削除することを示します',
      type: 'boolean',
      default: false
    },
    's': {
      alias: ['start', 'start-time'],
      description: '削除するスケジュールの期間の開始を指定します'
    },
    'e': {
      alias: ['end', 'end-time'],
      description: '削除するスケジュールの期間の終了を指定します'
    }
  },
  usage: 'Usage: $0 --user <userName>',
  example: '$0 --user userA,userB,userC --start-time "2020/10/01 13:00" --end-time "2020/11/01 15:00"',
  check: argv => {
    if (typeof argv.user !== 'undefined' && argv['all-user'] === true)
      throw new Error(`ERROR: -u <--user> と --all-user は同時に指定できません`);
    if (typeof argv.user === 'undefined' && argv['all-user'] === false)
      throw new Error(`ERROR: ユーザーを指定してください --all-user で全てのユーザーを指定できます`);
    return true;
  }
};

const parseCommandLine = () => {
  const argv = yargs(hideBin(process.argv))
    .options(setting.options)
    .usage(setting.usage)
    .example(setting.usage)
    .check(setting.check)
    .detectLocale(false) // 英語表記に
    .help(false) // --help 無効
    .version(false) // --version 無効
    .wrap(null) // 折り返し制限なし
    .argv;

  return {
    user: argv.user.split(','),
    allUser: argv['all-user'],
    startTime: argv['start-time'],
    endTime: argv['end-time']
  };
};

export default parseCommandLine;