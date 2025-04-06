---
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection
} from 'vitepress/theme'

// 创建者列表
const coreMembers = [
  {
    avatar: 'avatar/1.jpg',
    name: '秋水',
    title: 'King',
    desc: '究极摆烂选手 <s>二游糕手</s>',
    links: [
    //   { icon: 'github', link: 'https://github.com/QSlotus' },
      { icon: 'bilibili', link: 'https://space.bilibili.com/24895340' }
    ]
  }
]

const elders = [
  {
    avatar: 'avatar/2.jpg',
    name: '浪乄子乄',
    title: '元老中的元老',
    desc: '先驱者 基建狂魔',
    links: [
      { icon: 'bilibili', link: 'https://space.bilibili.com/574359929' }
    ]
  },
  {
    avatar: 'avatar/3.jpg',
    name: '土豆',
    title: '来去无踪管理员',
    desc: '娱乐型OP',
    links: [
      { icon: 'bilibili', link: 'https://space.bilibili.com/401682702' }
    ]
  },
  {
    avatar: 'avatar/4.jpg',
    name: '泠鸢不是冷鸟',
    title: '冷鸟姐姐！',
    desc: '可可爱爱 休闲玩家',
    // links: [
    //   { icon: 'bilibili', link: 'https://space.bilibili.com/401682702' }
    // ]
  },
  {
    avatar: 'avatar/7.jpg',
    name: 'even',
    title: '陨落的老祖 *e',
    desc: '纯净生存糕手<br> 建筑大师 黑厂老板'
  },
]

// 朋友列表
const friends = [
  {
    avatar: 'avatar/5.jpg',
    name: '清屿.',
    title: '珍稀物种（确信',
    desc: '梦想成为pvp大蛇'
  },
  {
    avatar: 'avatar/6.jpg',
    name: '君子清',
    title: '蓝毛控 方舟糕手',
    desc: '潜水员 比服主还能潜'
  },
  {
    avatar: 'avatar/8.jpg',
    name: 'zizu是蜘蛛',
    title: '惊悚小说爱好者',
    desc: '空岛大蛇'
  },
  {
    avatar: 'avatar/9.jpg',
    name: '一隅不是一藕',
    title: '可爱一隅',
    desc: '✝小天使✝'
  },
  {
    avatar: 'avatar/10.jpg',
    name: 'WangS',
    title: 'MacOS忠实用户 爱女同',
    desc: '交通大蛇'
  },
  {
    avatar: 'avatar/11.jpg',
    name: '九言',
    title: '可可爱爱九言！',
    desc: '红石糕手 植物魔法大蛇'
  },
  {
    avatar: 'avatar/12.jpg',
    name: '断灵',
    title: '游戏糕手',
    desc: '很坏的人，很好的人'
  },
  {
    avatar: 'avatar/13.jpg',
    name: '香草',
    title: '卡拉彼丘糕手',
    desc: '玩咒法学玩的'
  },
  {
    avatar: 'avatar/14.jpg',
    name: '不甜蛋糕',
    title: '蛋糕可爱呢',
    desc: '纯净生存玩家 老年人（并非 '
  },
  {
    avatar: 'avatar/15.jpg',
    name: '土豆丝炖电池',
    title: '视频制作者',
    desc: '经常悄咪咪的<br>不知道在服务器里面干嘛',
    links: [
      { icon: 'bilibili', link: 'https://space.bilibili.com/547298371'}
    ]
  },
  {
    avatar: 'avatar/16.jpg',
    name: 'YLS',
    title: '神秘人',
    desc: 'PVP大蛇'
  },
  {
    avatar: 'avatar/17.jpg',
    name: '眼镜盒',
    title: '人呢？',
    desc: '植物魔法糕手'
  },
  {
    avatar: 'avatar/18.jpg',
    name: '光阴不再',
    title: 'zako~❤',
    desc: '谁家偷渡客 雌小鬼 <br><s>见证</s>糕手'
  },
  {
    avatar: 'avatar/19.jpg',
    name: 'Arrow',
    title: '箭头猫猫可爱呢',
    desc: '三过服务器而不入'
  },
  {
    avatar: 'avatar/20.jpg',
    name: '系上流苏',
    title: '流苏可爱呢',
    desc: '偶尔上线'
  },
  {
    avatar: 'avatar/21.jpg',
    name: '沙沙',
    title: '沪✌ 老二次元',
    desc: '随机上线'
  },
  {
    avatar: 'avatar/22.jpg',
    name: '过往',
    title: '旅人',
    desc: '四海为家'
  },
  {
    avatar: 'avatar/24.jpg',
    name: '源泉',
    title: '小源泉',
    desc: '游戏领域大神<br><s><abbr title="真的吗">不是变态</abbr></s>'
  },
]

const unforgettable = [
  {
    avatar: 'avatar/23.jpg',
    name: '黑白不想开学',
    title: '黑白/小死神厨 车万人',
    desc: '生电大佬 假人大军首领'
  },
  {
    avatar: 'avatar/0.jpg',
    name: '昕',
    title: '万物之始',
    desc: '还是想见你'
  }
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>昕夕亭 - Minecraft</template>
    <template #lead>
    秋水妙妙屋
    </template>
  </VPTeamPageTitle>

  <!-- 创建者部分 -->
  <VPTeamPageSection>
    <template #title>九五至尊</template>
    <template #lead>
      服务器里看不到TA，实则在为服务器的存续做出妥协...?
    </template>
    <template #members>
      <VPTeamMembers
        size="medium"
        :members="coreMembers"
      />
    </template>
  </VPTeamPageSection>

  <VPTeamPageSection>
    <template #title>摄政王</template>
    <template #lead>
      重要的人，不能忘记的人，不想忘记的人..
    </template>
    <template #members>
      <VPTeamMembers
        size="small"
        :members="unforgettable"
      />
    </template>
  </VPTeamPageSection>

  <!-- 赞助者部分 -->
  <VPTeamPageSection>
    <template #title>元老院</template>
    <template #lead>
      因为热爱，所以坚持，感谢陪伴。
    </template>
    <template #members>
      <VPTeamMembers
        size="small"
        :members="elders"
      />
    </template>
  </VPTeamPageSection>

  <!-- 朋友部分 -->
  <VPTeamPageSection>
    <template #title>内阁</template>
    <template #lead>
      群英荟萃 <s><abbr title="并非">萝卜开会</abbr></s>
    </template>
    <template #members>
      <VPTeamMembers
        size="small"
        :members="friends"
      />
    </template>
  </VPTeamPageSection>
</VPTeamPage>