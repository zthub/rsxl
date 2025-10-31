// 融合训练 - 游戏配置
export const fusionGames = {
  '融合之E字表': {
    id: '融合之E字表',
    title: '融合之E字表',
    emoji: '🅴',
    desc: '戴上红绿眼镜你能看见E字吗！看看它的开口在哪边？',
    instruction: '使用说明:根据E字开口方向，按相应的← ↑↓ →，调整度数会好分别些，难，三度，易，八度。注意，当按错后会反回前次图形。',
    file: '融合之E字表.swf',
    bg: 'linear-gradient(135deg, #96CEB4, #A8E0C1)',
    padRule: '4',
    padDefaultVisible: true
  },
  '融合之箭头': {
    id: '融合之箭头',
    title: '融合之箭头',
    emoji: '➡️',
    desc: '戴上红绿眼镜你能看见它的开口在哪边？',
    instruction: '使用说明:根据E字开口方向，按相应的← ↑↓ →，调整度数会好分别些，难，三度，易，八度。注意，当按错后会反回前次图形。',
    file: '融合之箭头.swf',
    bg: 'linear-gradient(135deg, #96CEB4, #A8E0C1)',
    padRule: '4',
    padDefaultVisible: true
  },
  '融合之认字母': {
    id: '融合之认字母',
    title: '融合之认字母',
    emoji: '🔤',
    desc: '戴上红绿眼镜你能看见图中的字母吗？找出图中的字母与下图的哪个相同，找找看！',
    instruction: '使用说明:调整度数会好分别些，难，三度，易，八度。注意，找出后按开始下一次！',
    file: '融合之认字母.swf',
    bg: 'linear-gradient(135deg, #96CEB4, #A8E0C1)',
    padRule: '1234',
    padDefaultVisible: true
  },
  '心之向往': {
    id: '心之向往',
    title: '心之向往',
    emoji: '❤️',
    desc: '戴上红绿眼镜你能看见中国心向哪边？试试按吧！',
    instruction: '使用说明:根据中国心方向，按相应的↑↓ ，调整度数会好分别些，难，三度，易，八度。注意，当按错后会反回前次图形。',
    file: '心之向往.swf',
    bg: 'linear-gradient(135deg, #96CEB4, #A8E0C1)',
    padRule: 'ud',
    padDefaultVisible: true
  }
};

export const fusionGamesList = Object.keys(fusionGames).map(k => {
  const g = fusionGames[k];
  return { id: g.id, name: g.title, desc: g.desc, emoji: g.emoji };
});