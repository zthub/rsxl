// 同时知觉训练 - 游戏配置
export const simultaneousGames = {
  '百步穿杨': {
    id: '百步穿杨',
    title: '百步穿杨',
    emoji: '🏹',
    desc: '咱们到外面练箭去，你能一箭双雕吗！',
    instruction: '使用说明：弓箭会跟着鼠标移而改变方向，点击回车键进行发射......',
    file: '百步穿杨.swf',
    bg: 'linear-gradient(135deg, #45B7D1, #6BC5D8)',
    padRule: 'lre', // 左右方向键 + 回车键
    padDefaultVisible: true // 非PC端默认显示
  },
  '捕蝴蝶': {
    id: '捕蝴蝶',
    title: '捕蝴蝶',
    emoji: '🦋',
    desc: '春天来了，好多美丽的蝴蝶呀，你能捕到它吗！',
    instruction: '使用说明：网兜会跟着鼠标移而移动，点击左键进行挥动......',
    file: '捕蝴蝶.swf',
    bg: 'linear-gradient(135deg, #45B7D1, #6BC5D8)'
  },
  '打砖头': {
    id: '打砖头',
    title: '打砖头',
    emoji: '🧱',
    desc: '准备好你的弹球，看一次能打同块砖......',
    instruction: '使用说明:点击弹出小球，挡板会跟着鼠标移而移动而且会使弹球回弹打击更多的砖块......',
    file: '打砖头.swf',
    bg: 'linear-gradient(135deg, #45B7D1, #6BC5D8)'
  },
  '地图拼图': {
    id: '地图拼图',
    title: '地图拼图',
    emoji: '🧩',
    desc: '看看你住在哪里，拼完会出现......',
    instruction: '使用说明：用鼠标按住地图把它放进相应的位置。',
    file: '地图拼图.swf',
    bg: 'linear-gradient(135deg, #2e8b57, #206040)'
  },
  '俄罗斯方块': {
    id: '俄罗斯方块',
    title: '俄罗斯方块',
    emoji: '🧱',
    desc: '一款很老的小游戏，爸爸小时玩过的......',
    instruction: '使用说明：←左移→右移↑变换↓坠底',
    file: '俄罗斯方块.swf',
    bg: 'linear-gradient(135deg, #6a5acd, #483d8b)',
    padRule: '4', // 非PC设备：显示 上/左/下/右 四方向键
    padDefaultVisible: true // 虚拟键盘首次加载默认显示（可在播放器中切换隐藏/显示）
  },
  '交通安全': {
    id: '交通安全',
    title: '交通安全',
    emoji: '🚦',
    desc: '戴上红绿眼镜咱们开车去......',
    instruction: '使用说明：用鼠标点击与显示一样的交通标识！',
    file: '交通安全.swf',
    bg: 'linear-gradient(135deg, #45B7D1, #6BC5D8)'
  },
  '认字母': {
    id: '认字母',
    title: '认字母',
    emoji: '🔤',
    desc: '戴上红绿眼镜咱们看看老师写的是......',
    instruction: '使用说明：用鼠标点击与老师白板上显示一样的标识！',
    file: '认字母.swf',
    bg: 'linear-gradient(135deg, #45B7D1, #6BC5D8)'
  },
  '贪食蛇': {
    id: '贪食蛇',
    title: '贪食蛇',
    emoji: '🐍',
    desc: '戴上红绿眼镜咱们玩玩小游戏......',
    instruction: '使用说明：←左移 →右移 ↑上移 ↓下移，来改变贪食蛇的方向。',
    file: '贪食蛇.swf',
    bg: 'linear-gradient(135deg, #45B7D1, #6BC5D8)',
    padRule: '4',
    padDefaultVisible: true
  },
  '天降财源': {
    id: '天降财源',
    title: '天降财源',
    emoji: '💰',
    desc: '天上下元宝了，准备好篮子，去接元宝啦！',
    instruction: '使用说明：篮子会跟着鼠标移而移动。',
    file: '天降财源.swf',
    bg: 'linear-gradient(135deg, #45B7D1, #6BC5D8)'
  }
};

export const simultaneousGamesList = Object.keys(simultaneousGames).map(k => {
  const g = simultaneousGames[k];
  return { id: g.id, name: g.title, desc: g.desc, emoji: g.emoji };
});