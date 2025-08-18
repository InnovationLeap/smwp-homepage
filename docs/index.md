---
home: true
# heroImage: /img/smwplogo.png
heroText: Super Mario Worker Project
# tagline: 
actionText: 下载 SMWP
actionLink: /downloads/
bannerBg: /img/bg.webp # auto => 网格纹背景(有bodyBgImg时无背景)，默认 | none => 无 | '大图地址' | background: 自定义背景样式       提示：如发现文本颜色不适应你的背景时可以到palette.styl修改$bannerTextColor变量

features: # 可选的
  - title: 新物品
    details: SMWP 加入了更多地面与砖块，内置更多景物、背景图片，覆盖了 Mario Forever 中的常见素材。同时，新增了灰刺猬、多种乌龟、布布鬼、火球龟等敌人以及游鱼/飞鱼生成器。Check Point、开关砖、信息砖、冰块、新实心块、多色移动桥及其转向标记、滚屏标记、镜头控制物件、环境控制物件等设施的加入，增强了关卡的可玩性和发挥空间。
    # link: /web/ # 可选
    # imgUrl: /img/web.png # 可选
  - title: 新功能
    details: 支持手动调整探照灯的速度、半径和角度，重叠探照灯可查看并单独编辑，从此无需修改代码。方便的自动配对功能，可整体摆放水管、两格城堡砖。强大的微调功能现内置于 SMWP，无需编辑代码即可微调物件。关卡名称字符数、尺寸、时间、引力等参数的限制已被取消，非常规引力关卡、超大关卡、无限时间关卡均可轻松制作。物品偏移修正，所见即所得。上帝模式是专为关卡测试设计的游玩模式，可随心切换马里奥状态，自由移动位置。新增 Pick 键，同时具有吸色和移动含参数物件的功能。
    # link: /ui/
    # imgUrl: /img/ui.png
  - title: 更稳定
    details: 作为 Mario Worker 的更新，SMWP 修复了原版 MW 存在的大量 Bug，如刺猬卡墙、炮弹消失、关卡名重置、水下受伤后的判定、穿墙、踩怪无敌、读取关卡时关卡名丢失等。同时，SMWP 对之前版本的 Mario Worker 保持向下兼容，允许读取 .mfl、.mfs 等原版 Mario Worker 的关卡文件；针对旧版 SMWP 关卡，推出版本检测机制，使以前的关卡更好地在新版本运行。此外，SMWP 关卡可进行加密，防止「拆关」行为的发生。
    # link: /technology/
    # imgUrl: /img/other.png

# 文章列表显示方式: detailed 默认，显示详细版文章列表（包括作者、分类、标签、摘要、分页等）| simple => 显示简约版文章列表（仅标题和日期）| none 不显示文章列表
postList: none
---
## 简介
Super Mario Worker Project（SMWP）是由 INNOVATION LEAP 基于 Mario Worker 1.1 (4.1) 制作，使用 Game Maker 8 开发的一个非官方的 Mario Worker 编辑器。

相比原版 Mario Worker，SMWP 添加了大量新素材、新物品，在尽可能保留原版 Mario Worker 体验的同时增加新元素，开发实用功能，修复问题，注重稳定性。

## 最近更新
- `v1.7.11` 带来自定义音乐功能，新增纯色 Block、新背景、新敌人，针对用户反馈进行了多项问题修复与体验优化。(2025-07-18)
- `v1.7.10` 对 SMWP 的关卡运行效率进行了重大优化，新增了“敌人优化”功能取代原“Smooth 模式”，并修复了若干 Bug。(2024-10-12)
- `v1.7.9` 更新了大量自带音乐，优化了模仿者代码；修复了若干 Bug。(2022-07-24)
- `v1.7.8` 优化了对 Block 和模仿者的区分；修复了 v1.7.7 的部分 Bug；新增联网检测版本更新功能。(2021-07-11)
- `v1.7.7` 新增半格（16 像素）微调功能，编辑界面支持 Block 与模仿者相互切换；更新开关砖功能，新增颜色辅助模式，允许暂时关闭开关砖声音；修复了之前版本的一些遗留 Bug。(2021-05-03)
- `v1.7.6` 优化了风景类物件，大量风景/模仿者出现的关卡更加流畅。(2020-07-27)
- `v1.7.5` 重写了微调相关代码，显著改善编辑界面流畅度；解决了几个 Bug。(2020-07-11)
- `v1.7.4` 新增开关砖蔚蓝模式，当马里奥与虚砖重叠时，若虚砖变实砖，则马里奥所在位置的虚砖暂时保持虚状态，一旦马里奥离开，则恢复为其应有状态；修复了一些 Bug。(2020-06-26)
- `v1.7.3` 优化和 Bug 修复。(2020-06-13)
- `v1.7.2` 新增龟壳，增设 Mario Forever 式甜菜可选项；优化了部分 v1.7 的新增特性；修复了一些 Bug。(2020-06-03)
- `v1.7.0` 新增多种设施，包括信息砖、开关砖、冰块、特殊实心、流体控制元件、场景控制元件、镜头控制元件；增加了全局岩浆和自动流体系统；新增模仿者；多项编辑功能优化。(2020-05-24)

更多更新日志请查阅：[**下载页**](/downloads/)

## 特性介绍
<iframe class="video-iframe" width="100%" v-resize="{ log: true }" src="//player.bilibili.com/player.html?isOutside=true&aid=765365808&bvid=BV1Zr4y1m7My&cid=1178754483&p=1&autoplay=0" scrolling="no" frameborder="no" seamless="" framespacing="0" allowfullscreen="true"></iframe>

## 图集
<ClientOnly>
  <ImageCarousel />
</ClientOnly>

## 免责声明
马力欧及其版权归属任天堂。Mario Worker、Super Mario Worker Project 以及 INNOVATION LEAP 与任天堂没有任何关联或从属关系。Super Mario Worker Project 是非盈利的同人游戏，INNOVATION LEAP 从中不获取任何收益。

## 健康游戏忠告
抵制不良游戏，拒绝盗版游戏。注意自我保护，谨防受骗上当。适度游戏益脑，沉迷游戏伤身。合理安排时间，享受健康生活。

<script>
  export default {
      mounted(){
            function changeVideoIframe(){
                const video = document.getElementsByClassName('video-iframe');
                const width = document.getElementsByClassName('video-iframe')[0].scrollWidth;
                for(let i = 0;i<video.length;i++){
                    video[i].style.height = width*0.5625+'px'
                }
            }
            changeVideoIframe()
            window.onresize = function(){changeVideoIframe()}
      }
  }
</script>