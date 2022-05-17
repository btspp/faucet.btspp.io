var WINDOW_WIDTH = window.innerWidth;
var WINDOW_HEIGHT = window.innerHEIGHT;
var _current_lang = null;
var _current_password_lang = null;
var _referrer = null;
var _check_account = false; 
var _check_agree = false; 
var WS_API = "wss://api.bts.btspp.io:10100";

var words_chinese = ['的', '一', '是', '在', '不', '了', '有', '和', '人', '这', '中', '大', '为', '上', '个', '国', '我', '以', '要', '他', '时', '来', '用', '们', '生', '到', '作', '地', '于', '出', '就', '分', '对', '成', '会', '可', '主', '发', '年', '动', '同', '工', '也', '能', '下', '过', '子', '说', '产', '种', '面', '而', '方', '后', '多', '定', '行', '学', '法', '所', '民', '得', '经', '十', '三', '之', '进', '着', '等', '部', '度', '家', '电', '力', '里', '如', '水', '化', '高', '自', '二', '理', '起', '小', '物', '现', '实', '加', '量', '都', '两', '体', '制', '机', '当', '使', '点', '从', '业', '本', '去', '把', '性', '好', '应', '开', '它', '合', '还', '因', '由', '其', '些', '然', '前', '外', '天', '政', '四', '日', '那', '社', '义', '事', '平', '形', '相', '全', '表', '间', '样', '与', '关', '各', '重', '新', '线', '内', '数', '正', '心', '反', '你', '明', '看', '原', '又', '么', '利', '比', '或', '但', '质', '气', '第', '向', '道', '命', '此', '变', '条', '只', '没', '结', '解', '问', '意', '建', '月', '公', '无', '系', '军', '很', '情', '者', '最', '立', '代', '想', '已', '通', '并', '提', '直', '题', '党', '程', '展', '五', '果', '料', '象', '员', '革', '位', '入', '常', '文', '总', '次', '品', '式', '活', '设', '及', '管', '特', '件', '长', '求', '老', '头', '基', '资', '边', '流', '路', '级', '少', '图', '山', '统', '接', '知', '较', '将', '组', '见', '计', '别', '她', '手', '角', '期', '根', '论', '运', '农', '指', '几', '九', '区', '强', '放', '决', '西', '被', '干', '做', '必', '战', '先', '回', '则', '任', '取', '据', '处', '队', '南', '给', '色', '光', '门', '即', '保', '治', '北', '造', '百', '规', '热', '领', '七', '海', '口', '东', '导', '器', '压', '志', '世', '金', '增', '争', '济', '阶', '油', '思', '术', '极', '交', '受', '联', '什', '认', '六', '共', '权', '收', '证', '改', '清', '美', '再', '采', '转', '更', '单', '风', '切', '打', '白', '教', '速', '花', '带', '安', '场', '身', '车', '例', '真', '务', '具', '万', '每', '目', '至', '达', '走', '积', '示', '议', '声', '报', '斗', '完', '类', '八', '离', '华', '名', '确', '才', '科', '张', '信', '马', '节', '话', '米', '整', '空', '元', '况', '今', '集', '温', '传', '土', '许', '步', '群', '广', '石', '记', '需', '段', '研', '界', '拉', '林', '律', '叫', '且', '究', '观', '越', '织', '装', '影', '算', '低', '持', '音', '众', '书', '布', '复', '容', '儿', '须', '际', '商', '非', '验', '连', '断', '深', '难', '近', '矿', '千', '周', '委', '素', '技', '备', '半', '办', '青', '省', '列', '习', '响', '约', '支', '般', '史', '感', '劳', '便', '团', '往', '酸', '历', '市', '克', '何', '除', '消', '构', '府', '称', '太', '准', '精', '值', '号', '率', '族', '维', '划', '选', '标', '写', '存', '候', '毛', '亲', '快', '效', '斯', '院', '查', '江', '型', '眼', '王', '按', '格', '养', '易', '置', '派', '层', '片', '始', '却', '专', '状', '育', '厂', '京', '识', '适', '属', '圆', '包', '火', '住', '调', '满', '县', '局', '照', '参', '红', '细', '引', '听', '该', '铁', '价', '严', '首', '底', '液', '官', '德', '随', '病', '苏', '失', '尔', '死', '讲', '配', '女', '黄', '推', '显', '谈', '罪', '神', '艺', '呢', '席', '含', '企', '望', '密', '批', '营', '项', '防', '举', '球', '英', '氧', '势', '告', '李', '台', '落', '木', '帮', '轮', '破', '亚', '师', '围', '注', '远', '字', '材', '排', '供', '河', '态', '封', '另', '施', '减', '树', '溶', '怎', '止', '案', '言', '士', '均', '武', '固', '叶', '鱼', '波', '视', '仅', '费', '紧', '爱', '左', '章', '早', '朝', '害', '续', '轻', '服', '试', '食', '充', '兵', '源', '判', '护', '司', '足', '某', '练', '差', '致', '板', '田', '降', '黑', '犯', '负', '击', '范', '继', '兴', '似', '余', '坚', '曲', '输', '修', '故', '城', '夫', '够', '送', '笔', '船', '占', '右', '财', '吃', '富', '春', '职', '觉', '汉', '画', '功', '巴', '跟', '虽', '杂', '飞', '检', '吸', '助', '升', '阳', '互', '初', '创', '抗', '考', '投', '坏', '策', '古', '径', '换', '未', '跑', '留', '钢', '曾', '端', '责', '站', '简', '述', '钱', '副', '尽', '帝', '射', '草', '冲', '承', '独', '令', '限', '阿', '宣', '环', '双', '请', '超', '微', '让', '控', '州', '良', '轴', '找', '否', '纪', '益', '依', '优', '顶', '础', '载', '倒', '房', '突', '坐', '粉', '敌', '略', '客', '袁', '冷', '胜', '绝', '析', '块', '剂', '测', '丝', '协', '诉', '念', '陈', '仍', '罗', '盐', '友', '洋', '错', '苦', '夜', '刑', '移', '频', '逐', '靠', '混', '母', '短', '皮', '终', '聚', '汽', '村', '云', '哪', '既', '距', '卫', '停', '烈', '央', '察', '烧', '迅', '境', '若', '印', '洲', '刻', '括', '激', '孔', '搞', '甚', '室', '待', '核', '校', '散', '侵', '吧', '甲', '游', '久', '菜', '味', '旧', '模', '湖', '货', '损', '预', '阻', '毫', '普', '稳', '乙', '妈', '植', '息', '扩', '银', '语', '挥', '酒', '守', '拿', '序', '纸', '医', '缺', '雨', '吗', '针', '刘', '啊', '急', '唱', '误', '训', '愿', '审', '附', '获', '茶', '鲜', '粮', '斤', '孩', '脱', '硫', '肥', '善', '龙', '演', '父', '渐', '血', '欢', '械', '掌', '歌', '沙', '刚', '攻', '谓', '盾', '讨', '晚', '粒', '乱', '燃', '矛', '乎', '杀', '药', '宁', '鲁', '贵', '钟', '煤', '读', '班', '伯', '香', '介', '迫', '句', '丰', '培', '握', '兰', '担', '弦', '蛋', '沉', '假', '穿', '执', '答', '乐', '谁', '顺', '烟', '缩', '征', '脸', '喜', '松', '脚', '困', '异', '免', '背', '星', '福', '买', '染', '井', '概', '慢', '怕', '磁', '倍', '祖', '皇', '促', '静', '补', '评', '翻', '肉', '践', '尼', '衣', '宽', '扬', '棉', '希', '伤', '操', '垂', '秋', '宜', '氢', '套', '督', '振', '架', '亮', '末', '宪', '庆', '编', '牛', '触', '映', '雷', '销', '诗', '座', '居', '抓', '裂', '胞', '呼', '娘', '景', '威', '绿', '晶', '厚', '盟', '衡', '鸡', '孙', '延', '危', '胶', '屋', '乡', '临', '陆', '顾', '掉', '呀', '灯', '岁', '措', '束', '耐', '剧', '玉', '赵', '跳', '哥', '季', '课', '凯', '胡', '额', '款', '绍', '卷', '齐', '伟', '蒸', '殖', '永', '宗', '苗', '川', '炉', '岩', '弱', '零', '杨', '奏', '沿', '露', '杆', '探', '滑', '镇', '饭', '浓', '航', '怀', '赶', '库', '夺', '伊', '灵', '税', '途', '灭', '赛', '归', '召', '鼓', '播', '盘', '裁', '险', '康', '唯', '录', '菌', '纯', '借', '糖', '盖', '横', '符', '私', '努', '堂', '域', '枪', '润', '幅', '哈', '竟', '熟', '虫', '泽', '脑', '壤', '碳', '欧', '遍', '侧', '寨', '敢', '彻', '虑', '斜', '薄', '庭', '纳', '弹', '饲', '伸', '折', '麦', '湿', '暗', '荷', '瓦', '塞', '床', '筑', '恶', '户', '访', '塔', '奇', '透', '梁', '刀', '旋', '迹', '卡', '氯', '遇', '份', '毒', '泥', '退', '洗', '摆', '灰', '彩', '卖', '耗', '夏', '择', '忙', '铜', '献', '硬', '予', '繁', '圈', '雪', '函', '亦', '抽', '篇', '阵', '阴', '丁', '尺', '追', '堆', '雄', '迎', '泛', '爸', '楼', '避', '谋', '吨', '野', '猪', '旗', '累', '偏', '典', '馆', '索', '秦', '脂', '潮', '爷', '豆', '忽', '托', '惊', '塑', '遗', '愈', '朱', '替', '纤', '粗', '倾', '尚', '痛', '楚', '谢', '奋', '购', '磨', '君', '池', '旁', '碎', '骨', '监', '捕', '弟', '暴', '割', '贯', '殊', '释', '词', '亡', '壁', '顿', '宝', '午', '尘', '闻', '揭', '炮', '残', '冬', '桥', '妇', '警', '综', '招', '吴', '付', '浮', '遭', '徐', '您', '摇', '谷', '赞', '箱', '隔', '订', '男', '吹', '园', '纷', '唐', '败', '宋', '玻', '巨', '耕', '坦', '荣', '闭', '湾', '键', '凡', '驻', '锅', '救', '恩', '剥', '凝', '碱', '齿', '截', '炼', '麻', '纺', '禁', '废', '盛', '版', '缓', '净', '睛', '昌', '婚', '涉', '筒', '嘴', '插', '岸', '朗', '庄', '街', '藏', '姑', '贸', '腐', '奴', '啦', '惯', '乘', '伙', '恢', '匀', '纱', '扎', '辩', '耳', '彪', '臣', '亿', '璃', '抵', '脉', '秀', '萨', '俄', '网', '舞', '店', '喷', '纵', '寸', '汗', '挂', '洪', '贺', '闪', '柬', '爆', '烯', '津', '稻', '墙', '软', '勇', '像', '滚', '厘', '蒙', '芳', '肯', '坡', '柱', '荡', '腿', '仪', '旅', '尾', '轧', '冰', '贡', '登', '黎', '削', '钻', '勒', '逃', '障', '氨', '郭', '峰', '币', '港', '伏', '轨', '亩', '毕', '擦', '莫', '刺', '浪', '秘', '援', '株', '健', '售', '股', '岛', '甘', '泡', '睡', '童', '铸', '汤', '阀', '休', '汇', '舍', '牧', '绕', '炸', '哲', '磷', '绩', '朋', '淡', '尖', '启', '陷', '柴', '呈', '徒', '颜', '泪', '稍', '忘', '泵', '蓝', '拖', '洞', '授', '镜', '辛', '壮', '锋', '贫', '虚', '弯', '摩', '泰', '幼', '廷', '尊', '窗', '纲', '弄', '隶', '疑', '氏', '宫', '姐', '震', '瑞', '怪', '尤', '琴', '循', '描', '膜', '违', '夹', '腰', '缘', '珠', '穷', '森', '枝', '竹', '沟', '催', '绳', '忆', '邦', '剩', '幸', '浆', '栏', '拥', '牙', '贮', '礼', '滤', '钠', '纹', '罢', '拍', '咱', '喊', '袖', '埃', '勤', '罚', '焦', '潜', '伍', '墨', '欲', '缝', '姓', '刊', '饱', '仿', '奖', '铝', '鬼', '丽', '跨', '默', '挖', '链', '扫', '喝', '袋', '炭', '污', '幕', '诸', '弧', '励', '梅', '奶', '洁', '灾', '舟', '鉴', '苯', '讼', '抱', '毁', '懂', '寒', '智', '埔', '寄', '届', '跃', '渡', '挑', '丹', '艰', '贝', '碰', '拔', '爹', '戴', '码', '梦', '芽', '熔', '赤', '渔', '哭', '敬', '颗', '奔', '铅', '仲', '虎', '稀', '妹', '乏', '珍', '申', '桌', '遵', '允', '隆', '螺', '仓', '魏', '锐', '晓', '氮', '兼', '隐', '碍', '赫', '拨', '忠', '肃', '缸', '牵', '抢', '博', '巧', '壳', '兄', '杜', '讯', '诚', '碧', '祥', '柯', '页', '巡', '矩', '悲', '灌', '龄', '伦', '票', '寻', '桂', '铺', '圣', '恐', '恰', '郑', '趣', '抬', '荒', '腾', '贴', '柔', '滴', '猛', '阔', '辆', '妻', '填', '撤', '储', '签', '闹', '扰', '紫', '砂', '递', '戏', '吊', '陶', '伐', '喂', '疗', '瓶', '婆', '抚', '臂', '摸', '忍', '虾', '蜡', '邻', '胸', '巩', '挤', '偶', '弃', '槽', '劲', '乳', '邓', '吉', '仁', '烂', '砖', '租', '乌', '舰', '伴', '瓜', '浅', '丙', '暂', '燥', '橡', '柳', '迷', '暖', '牌', '秧', '胆', '详', '簧', '踏', '瓷', '谱', '呆', '宾', '糊', '洛', '辉', '愤', '竞', '隙', '怒', '粘', '乃', '绪', '肩', '籍', '敏', '涂', '熙', '皆', '侦', '悬', '掘', '享', '纠', '醒', '狂', '锁', '淀', '恨', '牲', '霸', '爬', '赏', '逆', '玩', '陵', '祝', '秒', '浙', '貌', '役', '彼', '悉', '鸭', '趋', '凤', '晨', '畜', '辈', '秩', '卵', '署', '梯', '炎', '滩', '棋', '驱', '筛', '峡', '冒', '啥', '寿', '译', '浸', '泉', '帽', '迟', '硅', '疆', '贷', '漏', '稿', '冠', '嫩', '胁', '芯', '牢', '叛', '蚀', '奥', '鸣', '岭', '羊', '凭', '串', '塘', '绘', '酵', '融', '盆', '锡', '庙', '筹', '冻', '辅', '摄', '袭', '筋', '拒', '僚', '旱', '钾', '鸟', '漆', '沈', '眉', '疏', '添', '棒', '穗', '硝', '韩', '逼', '扭', '侨', '凉', '挺', '碗', '栽', '炒', '杯', '患', '馏', '劝', '豪', '辽', '勃', '鸿', '旦', '吏', '拜', '狗', '埋', '辊', '掩', '饮', '搬', '骂', '辞', '勾', '扣', '估', '蒋', '绒', '雾', '丈', '朵', '姆', '拟', '宇', '辑', '陕', '雕', '偿', '蓄', '崇', '剪', '倡', '厅', '咬', '驶', '薯', '刷', '斥', '番', '赋', '奉', '佛', '浇', '漫', '曼', '扇', '钙', '桃', '扶', '仔', '返', '俗', '亏', '腔', '鞋', '棱', '覆', '框', '悄', '叔', '撞', '骗', '勘', '旺', '沸', '孤', '吐', '孟', '渠', '屈', '疾', '妙', '惜', '仰', '狠', '胀', '谐', '抛', '霉', '桑', '岗', '嘛', '衰', '盗', '渗', '脏', '赖', '涌', '甜', '曹', '阅', '肌', '哩', '厉', '烃', '纬', '毅', '昨', '伪', '症', '煮', '叹', '钉', '搭', '茎', '笼', '酷', '偷', '弓', '锥', '恒', '杰', '坑', '鼻', '翼', '纶', '叙', '狱', '逮', '罐', '络', '棚', '抑', '膨', '蔬', '寺', '骤', '穆', '冶', '枯', '册', '尸', '凸', '绅', '坯', '牺', '焰', '轰', '欣', '晋', '瘦', '御', '锭', '锦', '丧', '旬', '锻', '垄', '搜', '扑', '邀', '亭', '酯', '迈', '舒', '脆', '酶', '闲', '忧', '酚', '顽', '羽', '涨', '卸', '仗', '陪', '辟', '惩', '杭', '姚', '肚', '捉', '飘', '漂', '昆', '欺', '吾', '郎', '烷', '汁', '呵', '饰', '萧', '雅', '邮', '迁', '燕', '撒', '姻', '赴', '宴', '烦', '债', '帐', '斑', '铃', '旨', '醇', '董', '饼', '雏', '姿', '拌', '傅', '腹', '妥', '揉', '贤', '拆', '歪', '葡', '胺', '丢', '浩', '徽', '昂', '垫', '挡', '览', '贪', '慰', '缴', '汪', '慌', '冯', '诺', '姜', '谊', '凶', '劣', '诬', '耀', '昏', '躺', '盈', '骑', '乔', '溪', '丛', '卢', '抹', '闷', '咨', '刮', '驾', '缆', '悟', '摘', '铒', '掷', '颇', '幻', '柄', '惠', '惨', '佳', '仇', '腊', '窝', '涤', '剑', '瞧', '堡', '泼', '葱', '罩', '霍', '捞', '胎', '苍', '滨', '俩', '捅', '湘', '砍', '霞', '邵', '萄', '疯', '淮', '遂', '熊', '粪', '烘', '宿', '档', '戈', '驳', '嫂', '裕', '徙', '箭', '捐', '肠', '撑', '晒', '辨', '殿', '莲', '摊', '搅', '酱', '屏', '疫', '哀', '蔡', '堵', '沫', '皱', '畅', '叠', '阁', '莱', '敲', '辖', '钩', '痕', '坝', '巷', '饿', '祸', '丘', '玄', '溜', '曰', '逻', '彭', '尝', '卿', '妨', '艇', '吞', '韦', '怨', '矮', '歇'];
var words_english = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function randomGenerateChineseWord_N16()
{
  var k = window.bitshares_js.key;
  var randomBuffer = k.random32ByteBuffer(k.browserEntropy());

  var words_list = words_chinese;
  var words_list_count = words_list.length;

  var brainkey = [];
  var end = 32;
  var base = 65536.0; //  Math.pow(2, 16);
  for (var i = 0; i < end; i += 2) {
      // randomBuffer has 256 bits / 16 bits per word == 16 words
      var num = (randomBuffer[i] << 8) + randomBuffer[i + 1];

      // convert into a number between 0 and 1 (inclusive)
      var rndMultiplier = num / base;
      var wordIndex = parseInt(words_list_count * rndMultiplier);

      brainkey.push(words_list[wordIndex]);
  }

  return brainkey;
}

function randomGenerateEnglishWord_N32()
{
  var k = window.bitshares_js.key;
  var randomBuffer = k.random32ByteBuffer(k.browserEntropy());

  var words_list = words_english;
  var words_list_count = words_list.length;

  var brainkey = [];
  var base = 256.0;
  for (var i = 0; i < 32; ++i) {
      var num = randomBuffer[i];

      // convert into a number between 0 and 1 (inclusive)
      var rndMultiplier = num / base;
      var wordIndex = parseInt(words_list_count * rndMultiplier);

      brainkey.push(words_list[wordIndex]);
  }

  return brainkey;
}


// 需创建的密码数据
var _password = {
  "zh":  [],
  "en": []
};

// 提交的数据初始化
var _submit_data = {
  "account_name" : null,
  "owner_key" : null,
  "active_key" : null,
  "memo_key" : null,
  "chid": 50,
  "referrer_code": null
}


var I18n = {
  "zh": {
    "account": "账号",
    "title": "欢迎来到比特股去中心化交易平台",
    "tip_input_account": "请输入账号",
    "tip_argeement": "我同意",
    "tip_argeement_link": "《用户服务协议》",

    "include_en_digit_char": "由英文字母、数字或短横线 \"-\" 组成",
    "start_with_char": "必须字母开头",  
    "length3to32": "长度3到32位字符",
    "include_digit": "必须包含数字",
    "digit_char_tail": "以数字或字母结尾",

    "register_immediately": "立即注册",
    "exist_account": "已有账号 ",
    "download_immediately": "立即下载",
    "website": "官网：",
    "referrer": "推荐人",
    "tip_save_pwd": "请妥善保管以下密码",
    "important_tip": "重要提示：请勿<span class='highlight'>复制</span>/<span class='highlight'>拍照</span>/<span class='highlight'>截屏</span>，使用纸笔按顺序抄录并保存到安全的地方，丢失后<span class='highlight'>无法找回</span>。",
    "next_step": "下一步",
    "back_button": "回上一页",

    "exist": "已经存在。",
    "request": "请求中…",
    "networking_error": "网络异常，请稍后再试。",

    "congratulation": "恭喜您注册成功！",
    "your-account": "您的账号",
    "login-link": "下载登录",

    "tip-register-confirmation": "请确认您的密码已经抄录完毕，并保存到了安全的地方，丢失将无法找回。",

    "API_REGISTER_RETURN_STATUS_MSG": {
      "0": "正常",
      "10": "参数无效。",
      "20": "账号格式无效。",
      "30": "账号已经存在。",
      "40": "未知错误，广播失败。",
      "41": "该设备注册账号数量过多。",
      "42": "注册太频繁，请稍后再试。",
      "51": "主账号不存在。",
      "52": "备账号不存在。",
      "999": "服务器维护中。",
    }
  },
  "en": {
    "account": "Account",
    "title": "Welcome to BitShares",
    "tip_input_account": "Please enter an account",
    "tip_argeement": "I agree with the ",
    "tip_argeement_link": "User Agreement",

    "include_en_digit_char": "Composed of letter, number, or \"-\"",
    "start_with_char": "Start with letter",  
    "length3to32": "Length 3-12 chars",
    "include_digit": "Contain number",
    "digit_char_tail": "End with num or letter",

    "register_immediately": "Register",
    "exist_account": "Have an account? ",
    "download_immediately": "Log in here",
    "website": "Website: ",
    "referrer": "Referrer",
    "tip_save_pwd": "Your password",
    "important_tip": "Important: Don't <span class='highlight'>copy</span> / <span class='highlight'>photograph</span> / <span class='highlight'>screenshot</span>, use paper and pen to record and keep it in a safe place, and <span class='highlight'>you cannot retrieve it</span> if you lose it.",
    "next_step": "Next",
    "back_button": "Back",

    "exist": "already exists.",
    "request": "Requesting…",
    "networking_error": "Network error. Please try again later.",

    "congratulation": "Congratulations! Registration is successful.",
    "your-account": "Your account",
    "login-link": "Download & Login",

    "tip-register-confirmation": "Please make sure that your password has been copied and saved to a safe place. If it is lost, it cannot be retrieved.",

    "API_REGISTER_RETURN_STATUS_MSG": {
      "0": "ok",
      "10": "Invalid argument.",
      "20": "The account format is incorrect.",
      "30": "The account already exists.",
      "40": "Unknown error, broadcast failed.",
      "41": "The device has too many registered accounts.",
      "42": "Registration is too often, please try again later.",
      "51": "Master account does not exist.",
      "52": "Secondary account does not exist.",
      "999": "Server maintenance."
    }

  }
}

function getUrlParam(name) {
  const reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  const r = window.location.search.substr(1).match(reg);
  if (r != null)
    return unescape(r[2]);
  return null;
}

// 显示 block view
function showBlockView(){
  document.getElementById("top-block-view").style.display = "block";
}

// 隐藏 block view
function hideBlockView(){
  document.getElementById("top-block-view").style.display = "none";
}

function isLangZh(){
  return _current_lang === "zh";
}

function tranlate(){
  var i18n = I18n[_current_lang];
  document.getElementById("title").innerText = i18n["title"];
  document.getElementById("tip-input-account").innerText = i18n["tip_input_account"];
  // document.getElementById("input-account").placeholder = i18n["tip_input_account"];

  document.getElementById("cb-text-include-en-digest-char").innerText = i18n["include_en_digit_char"];
  document.getElementById("cb-text-start-with-char").innerText = i18n["start_with_char"];
  document.getElementById("cb-text-length3to32").innerText = i18n["length3to32"];
  document.getElementById("cb-text-include-digit").innerText = i18n["include_digit"];
  document.getElementById("cb-text-digit-char-tail").innerText = i18n["digit_char_tail"];

  document.getElementById("submit-button").innerText = i18n["register_immediately"];
  document.getElementById("text-exist-account").innerText = i18n["exist_account"];
  document.getElementById("link-download").innerText = i18n["download_immediately"];
  document.getElementById("text-website").innerText = i18n["website"];
  document.getElementById("text-referrer").innerText = i18n["referrer"];

  document.getElementById("tip-save-pwd").innerText = i18n["tip_save_pwd"];
  document.getElementById("important-tip").innerHTML = i18n["important_tip"];
  document.getElementById("next-button").innerText = i18n["next_step"];
  document.getElementById("argeement-checkbox-tip-agreement").innerText = i18n["tip_argeement"];
  document.getElementById("argeement-checkbox-tip-agreement-link").innerText = i18n["tip_argeement_link"];
  document.getElementById("back-button").innerText = i18n["back_button"];

  document.getElementById("top-block-view-tips").innerText = i18n["request"];

  document.getElementById("congratulation").innerText = i18n["congratulation"];
  document.getElementById("login-link").innerText = i18n["login-link"];

}

// 渲染界面 - 密码
function renderPassword(array_password){
  var wrap_div = document.getElementById("word-password-wrap");
  wrap_div.innerHTML = "";

  array_password.forEach(function(text){
    var div = document.createElement("div");
    div.innerText = text;
    div.style.color = "white";
    div.style.fontSize = "16px";
    div.style.fontWeight = "700";
    div.style.float = "left";
    
    if (_current_password_lang === "zh"){
      div.style.width = "12.5%";
    } else {
      div.style.width = "25%";
    }
    
    div.style.textAlign = "center";
    div.style.paddingTop = "3.25%";
    div.style.paddingBottom = "3.25%";

    wrap_div.appendChild(div);
  });
}

function renderReferrer(){
  var name = _referrer || "";
  if (name && name.length > 0) {
    document.getElementById("referrer-wrap").style.display = "block";
    document.getElementById("referrer").innerText = name;
  } else {
    document.getElementById("referrer-wrap").style.display = "none";
  }
}

function renderStyle(){
  // 渲染推荐人
  renderReferrer();

  // 显示第一步的界面
  document.getElementById("register-step1").style.display = "block";
  // showSuccessContent();


  // 无效化下一步和提交按钮样式
  disableNextButtonStyle();
  disableSubmitButtonStyle();

  var link_agreement = document.getElementById("argeement-checkbox-tip-agreement-link");

  document.getElementById("lang-cn").style.color = "#5c7ed2";
  document.getElementById("lang-en").style.color = "#5c7ed2";

  if (isLangZh()) {
    renderPassword(_password["zh"]);

    // 用户协议中文版
    link_agreement.href = "https://btspp.io/zh-cn/agreement.html";

  } else {
    renderPassword(_password["en"]);

    // 用户协议英文版
    link_agreement.href = "https://btspp.io/en/agreement.html";
  }

  // 中英文切换默认隐藏一个
  if (_current_password_lang === "zh"){
    document.getElementById("lang-cn").style.display = "none";
  } else {
    document.getElementById("lang-en").style.display = "none";
  }
}

function bindEvents(){
  // 立即注册按钮
  document.getElementById("submit-button").addEventListener('click',function() {
    onSubmitButton();
  });

  // 中英文密码切换按钮
  document.getElementById("lang-cn").addEventListener('click',function() {
    onLangZhClickButton();
  });
  document.getElementById("lang-en").addEventListener('click',function() {
    onLangEnClickButton();
  });

  // 下一步
  document.getElementById("next-button").addEventListener('click',function() {
    onNextClickButton();
  });

  // 回上一页
  document.getElementById("back-button").addEventListener('click',function() {
    onBackClickButton();
  });

  // checkbox 同意事件
  document.getElementById("agreement-checkbox").addEventListener('click',function() {
    onBackCheckAgreeChecked();
  });

  // 监测账号输入
  document.getElementById("input-account").addEventListener('input',function(e) {
    var target = e.target;
    onAccountChange(target);
  });
}



function onAccountChange(target){
  var value = target.value.toLowerCase();

  clearAllCheckImg()
  clearAllCheckTextStyleColor();

  // 初始化检查步骤 和 下一步按钮灰色
  var check_finishs = 0;
  _check_account = false;
  disableNextButtonStyle();

  // 检测包含字母数字-
  if (/^[a-zA-Z0-9-]+$/.test(value)){
    showCheckImgIncEnDigestChar();
    showHighLightCheckIncEnDigestCharText();
    check_finishs++;
  }

  // 检测字母开头
  var first_char = value[0];
  if (/^[a-zA-Z]$/.test(first_char)){
    showCheckImgStartWithChar();
    showHighLightCheckStartWithCharText();
    check_finishs++;
  }

  // 检测3-32位
  if (value.length >= 3 && value.length <= 32){
    showCheckImgLength3to32();
    showHighLightCheckLength3to32Text();
    check_finishs++;
  }

  // 检测包含数字
  if ((/[0-9]+/ig).test(value)){
    showCheckImgIncludeDigit();
    showHighLightCheckIncludeDigitText();
    check_finishs++;
  }

  // 数字或字母结尾
  var last_char = value[value.length-1];
  if (/^[a-zA-Z0-9]$/.test(last_char)){
    showCheckImgDigitCharTail();
    showHighLightCheckDigitCharTailText();
    check_finishs++;
  }

  // 5步检测全部通过 -> 点亮下一步按钮
  if (check_finishs === 5) {
    _check_account = true;
    _submit_data["account_name"] = value;
    enableNextButtonStyle();
  }
}

// 显示所有未 check 的图片
function clearAllCheckImg(){
  var tags = document.getElementsByClassName("img-no-check");
  for (var i = 0; i < tags.length; i++){
    var tag = tags[i];
    tag.style.display = "block";
  }
  tags = document.getElementsByClassName("img-check");
  for (var i = 0; i < tags.length; i++){
    var tag = tags[i];
    tag.style.display = "none";
  }
}

// 清除所有check文字的颜色
function clearAllCheckTextStyleColor(){
  var tags = document.getElementsByClassName("field-text");
  for (var i = 0; i < tags.length; i++){
    var tag = tags[i];
    tag.style.color = "white";
  }
}

// 下一步提交
function onNextClickButton(){
  if (!_check_account){
    return;
  }

  // 请求查找账号是否存在
  var account_name = document.getElementById("input-account").value.toLowerCase();
  showBlockView();
  bitsharesQueryAccount(account_name,function(res){
    hideBlockView();
    console.log(res)
    if (res){
      var i18n = I18n[_current_lang];
      alert(i18n["account"] + " " + account_name + " " + i18n["exist"]);
      return;
    }

    var div_step1 = document.getElementById("register-step1")
    var div_step2 = document.getElementById("register-step2")
    div_step1.style.display = "none";
    div_step2.style.display = "block";

    // 下一步二维码和推荐人不显示
    document.getElementById("qrcode").style.display = "none";
    document.getElementById("referrer-wrap").style.display = "none";
  });
}

function onBackClickButton(){
  var div_step1 = document.getElementById("register-step1")
  var div_step2 = document.getElementById("register-step2")
  div_step1.style.display = "block";
  div_step2.style.display = "none";

  // 返回时二维码和推荐人恢复显示
  document.getElementById("qrcode").style.display = "block";
  renderReferrer();
}

// 同意注册协议事件
function onBackCheckAgreeChecked(){
  var check_agree = document.getElementById("agreement-checkbox");
  if (check_agree.checked){
    enableSubmitButtonStyle();
  } else {
    disableSubmitButtonStyle();
  }
}

// 无效化 下一步按钮样式
function disableNextButtonStyle(){
  document.getElementById("next-button").style.backgroundColor = "#474a54";
}

// 有效化 下一步按钮样式
function enableNextButtonStyle(){
  document.getElementById("next-button").style.backgroundColor = "#5c7ed2";
}

// 无效化 提交按钮样式
function disableSubmitButtonStyle(){
  document.getElementById("submit-button").style.backgroundColor = "#474a54";
}

// 有效化 提交按钮样式
function enableSubmitButtonStyle(){
  document.getElementById("submit-button").style.backgroundColor = "#5c7ed2";
}

// 显示高亮包含字母数字-check文字颜色
function showHighLightCheckIncEnDigestCharText(){
  document.getElementById("cb-text-include-en-digest-char").style.color = "#5c7ed2";
}

// 显示高亮包含字符check文字颜色
function showHighLightCheckStartWithCharText(){
  document.getElementById("cb-text-start-with-char").style.color = "#5c7ed2";
}

// 显示高亮至少3-32位check文字颜色
function showHighLightCheckLength3to32Text(){
  document.getElementById("cb-text-length3to32").style.color = "#5c7ed2";
}

// 显示高亮包含数字check文字颜色
function showHighLightCheckIncludeDigitText(){
  document.getElementById("cb-text-include-digit").style.color = "#5c7ed2";
}

// 显示高亮数字或字母结尾check文字颜色
function showHighLightCheckDigitCharTailText(){
  document.getElementById("cb-text-digit-char-tail").style.color = "#5c7ed2";
}


// 显示包含字母数字 - check image
function showCheckImgIncEnDigestChar(){
  document.getElementById("check-yes-cb-text-include-en-digest-char").style.display = "block";
  document.getElementById("check-no-cb-text-include-en-digest-char").style.display = "none";
}

// 显示字母开头 check image
function showCheckImgStartWithChar(){
  document.getElementById("check-yes-start-with-char").style.display = "block";
  document.getElementById("check-no-start-with-char").style.display = "none";
}

// 显示至少3-32位 check image
function showCheckImgLength3to32(){
  document.getElementById("check-yes-length3to32").style.display = "block";
  document.getElementById("check-no-length3to32").style.display = "none";
}

// 显示包含数字 check image
function showCheckImgIncludeDigit(){
  document.getElementById("check-yes-include-digit").style.display = "block";
  document.getElementById("check-no-include-digit").style.display = "none";
}

// 显示数字或字母结尾
function showCheckImgDigitCharTail(){
  document.getElementById("check-yes-digit-char-tail").style.display = "block";
  document.getElementById("check-no-digit-char-tail").style.display = "none";
}

// 中文密码切换点击
function onLangZhClickButton(){
  if (_current_password_lang === "zh") return;
  _current_password_lang = "zh";
  generatePassword();
  document.getElementById("lang-cn").style.display = "none";
  document.getElementById("lang-en").style.display = "block";
  renderPassword(_password["zh"]);
}

// 英文密码切换点击
function onLangEnClickButton(){
  if (_current_password_lang === "en") return;
  _current_password_lang = "en";
  generatePassword();
  document.getElementById("lang-cn").style.display = "block";
  document.getElementById("lang-en").style.display = "none";
  renderPassword(_password["en"]);
}

// 显示注册成功界面
function showSuccessContent(){
    var i18n = I18n[_current_lang];
    document.getElementById("qrcode").style.display = "none";
    document.getElementById("footer").style.display = "none";
    document.getElementById("bottom-footer").style.display = "block";
    document.getElementById("your-account").innerText = i18n["your-account"] + " " + _submit_data["account_name"];
    var div_step2 = document.getElementById("register-step2")
    var div_step3 = document.getElementById("register-step3")
    div_step2.style.display = "none";
    div_step3.style.display = "block";
}

// 注册接口完成
function onRequestRegisterApiFinished(resp){
  // 隐藏遮罩
  hideBlockView();

  console.log(resp);

  if (resp["status"] !== 0 && resp["msg"] !== "ok"){
    var i18n = I18n[_current_lang];
    var error_msg = i18n["API_REGISTER_RETURN_STATUS_MSG"][resp["status"].toString()];
    alert(error_msg);
  } else {
    showSuccessContent();
  }
}

// 网络异常
function onRequestNetworkingError(code){
  hideBlockView();
  var i18n = I18n[_current_lang];
  alert(i18n["networking_error"]);
}

// 请求注册接口
function requestRegisterApi(callback){

  var password_ary = _current_password_lang === "zh" ?  _password["zh"] :  _password["en"];
  var account_name = _submit_data["account_name"];

  //  创建提交用的公/私钥对
  generateSubmitKeyPairs(account_name, password_ary.join(""));

  //  请求注册接口
  $.ajax("https://f.api.btspp.io:10200/v1/chain/register", {
    type: "post",
    data: _submit_data,
    crossDomain: true,
    dataType: 'json',
    timeout: 30000,
    success: function(data, code, xhr) {
      callback(data);
    },
    complete: function(xhr, code) {
    },
    error: function(xhr, code) {
      onRequestNetworkingError(code);
    }
  })
}

// 立即注册提交
function onSubmitButton(){
  var check_agree = document.getElementById("agreement-checkbox");
  if (!check_agree.checked){
    return;
  }

  // 二次确认注册
  var i18n = I18n[_current_lang];
  if(!window.confirm(i18n["tip-register-confirmation"])){
    return;
  }

  // 提交前遮罩
  showBlockView();

  // 查找推荐人id
  if (_referrer){
    bitsharesQueryAccount(_referrer,function(res){
      
      // 查找到推荐人 则放到提交数据中
      if (res && res.id){
        _submit_data["referrer_code"] = btoa(res.id.split(".")[2]);
      }

      // 提交请求逻辑
      requestRegisterApi(onRequestRegisterApiFinished);
    });
  } else {
      // 提交请求逻辑
      requestRegisterApi(onRequestRegisterApiFinished);
  }
}

// 执行 bts api
function bitsharesExecApi(api_name,params, callback){
  window.apis.instance().db_api().exec(api_name,params).then(function(res){
    callback(res);
  }).catch(function(err){
    hideBlockView();
    console.log(err)
    // alert("[Request exception] \n code: " + err.code + ",\n message: " + err.data.message);
    var i18n = I18n[_current_lang];
    alert(i18n["networking_error"]);
  })
}

// 查询账号
function bitsharesQueryAccount(account, callback){
  if(typeof(window.bitshares_js) === "object"){
    window.apis = window.bitshares_js.bitshares_ws.Apis
    window.apis.instance(WS_API, true, 8000).init_promise.then(function(res){
      bitsharesExecApi("get_account_by_name",[account],callback);
    }).catch(function(err){
      callback(null);
    })
  }
}

//  根据账号密码生成对应的公钥
function genPublicKeyFromPassword(account_name, password, permission_role)
{
  //  TODO:前缀 目前仅支持BTS
  return window.bitshares_js.PrivateKey.fromSeed(account_name + permission_role + password).toPublicKey().toString("BTS");
}

// 创建注册用的公/私钥对
function generateSubmitKeyPairs(account_name, password){
  _submit_data["owner_key"] = genPublicKeyFromPassword(account_name, password, 'owner');
  _submit_data["active_key"] = genPublicKeyFromPassword(account_name, password, 'active');
  _submit_data["memo_key"] = genPublicKeyFromPassword(account_name, password, 'memo');
}

// 生成中文密码
function generatePasswordForZh(){
  _password["zh"] = randomGenerateChineseWord_N16();
}

// 生成英文密码
function generatePasswordForEn(){
  var list = randomGenerateEnglishWord_N32();
  var words = [];
  for (var i = 0; i < 32; i += 4) {
    words.push(list.slice(i, i + 4).join(""))
  }
  _password["en"] = words;
}

// 生成密码
function generatePassword(){
  if (_current_password_lang === "zh") {
    generatePasswordForZh();
  }else{
    generatePasswordForEn();
  }
}

// 初始化数据
function initializeData(){

  // 设定语言
  _current_lang = getUrlParam("lang") || "zh";
  _current_password_lang = _current_lang;

  // 获取浏览器参数
  _referrer = getUrlParam("r");

  // 生成随机密码
  generatePassword();
}

// 主函数
function main(){
  
  // 1 初始化数据
  initializeData();

  // 2. 翻译界面
  tranlate();

  // 3. 渲染样式
  renderStyle();

  // 4. 绑定事件
  bindEvents();
}

window.addEventListener('load', function () {
  main();
});
