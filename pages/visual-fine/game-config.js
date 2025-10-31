// 统一的视觉精细训练游戏配置
export const visualFineGames = {
  'coffee-match': {
    id: 'coffee-match',
    title: '连连看之咖啡',
    emoji: '☕',
    desc: '找出两个图形一样的图案，点击它们让它消失...',
    instruction: '使用说明:找到后分别左键连续点击，注意，它们之间的连线不超过两个弯！有时间限制的呦！',
    file: '连连看之咖啡.swf',
    bg: 'linear-gradient(135deg, #4ECDC4, #6ED5CC)'
  },
  'link-match': {
    id: 'link-match',
    title: '连连看',
    emoji: '🔗',
    desc: '找出两个图形一样的图案，点击它们让它消失...',
    instruction: '使用说明:找到后分别左键连续点击，注意，它们之间的连线不超过两个弯！有时间限制的呦！',
    file: '连连看.swf',
    bg: 'linear-gradient(135deg, #4ECDC4, #6ED5CC)'
  },
  'hammer-nails': {
    id: 'hammer-nails',
    title: '打钉子',
    emoji: '🔨',
    desc: '爸爸拿钉子，你拿锤子，哎哟！打到到爸爸的手了...',
    instruction: '使用说明:锤子会跟着鼠标移动向反方向移动，点击左键进行打击...注意，爸爸的手哟！',
    file: '打钉子.swf',
    bg: 'linear-gradient(135deg, #b33a3a, #7a1f1f)'
  },
  'map-jigsaw': {
    id: 'map-jigsaw',
    title: '拼地图',
    emoji: '🧩',
    desc: '戴上红绿眼镜咱们拼拼中国地图......',
    instruction: '使用说明：此游戏需要使用鼠标拖动拼图块进行拼图。',
    file: '地图拼图.swf',
    bg: 'linear-gradient(135deg, #45B7D1, #6BC5D8)'
    // 移除 padRule，按需显示（默认 PC 不显示虚拟方向键，非 PC 且未配置也不显示）
  },
  'number-wheel': {
    id: 'number-wheel',
    title: '数字飞轮',
    emoji: '🎯',
    desc: '你会数数么，看看能数到几？',
    instruction: '使用说明:先找出1，点击一下，再找出2，3，4...调整难度会好分别些哟！',
    file: '数字飞轮.swf',
    bg: 'linear-gradient(135deg, #6a5acd, #483d8b)'
  },
  'find-letters': {
    id: 'find-letters',
    title: '找字母',
    emoji: '🔤',
    desc: '好漂亮的图画呀，看看里面有些什么...',
    instruction: '使用说明：找出26个英文字母，用红笔把它们圈起来......',
    file: '找字母.swf',
    bg: 'linear-gradient(135deg, #ff8c00, #cc7000)'
  },
  'paint-color': {
    id: 'paint-color',
    title: '涂鸦',
    emoji: '🎨',
    desc: '你喜欢画画吗？如果喜欢那就画吧......',
    instruction: '使用说明：笔会跟着鼠标移，先让笔涂颜色，点击图片中的小横线正中间进行涂色，对准了哦',
    file: '涂鸦.swf',
    bg: 'linear-gradient(135deg, #ff69b4, #c71585)'
  }
};

// 列表展示所需的简化数据
export const visualFineGamesList = [
  { id: 'coffee-match', name: visualFineGames['coffee-match'].title, desc: visualFineGames['coffee-match'].desc, emoji: visualFineGames['coffee-match'].emoji },
  { id: 'link-match', name: visualFineGames['link-match'].title, desc: visualFineGames['link-match'].desc, emoji: visualFineGames['link-match'].emoji },
  { id: 'hammer-nails', name: visualFineGames['hammer-nails'].title, desc: visualFineGames['hammer-nails'].desc, emoji: visualFineGames['hammer-nails'].emoji },
  { id: 'map-jigsaw', name: visualFineGames['map-jigsaw'].title, desc: visualFineGames['map-jigsaw'].desc, emoji: visualFineGames['map-jigsaw'].emoji },
  { id: 'number-wheel', name: visualFineGames['number-wheel'].title, desc: visualFineGames['number-wheel'].desc, emoji: visualFineGames['number-wheel'].emoji },
  { id: 'find-letters', name: visualFineGames['find-letters'].title, desc: visualFineGames['find-letters'].desc, emoji: visualFineGames['find-letters'].emoji },
  { id: 'paint-color', name: visualFineGames['paint-color'].title, desc: visualFineGames['paint-color'].desc, emoji: visualFineGames['paint-color'].emoji }
];