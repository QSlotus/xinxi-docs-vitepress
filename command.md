# 服务器指令

昕夕亭安装了许多插件以增强游戏趣味性。

> `< ... >` ：此为必选参数
>
> `[ ... ]` ：此为可选参数

::: info
指令无需带括号
:::

::: tip
可用指令的插件列表可在右侧的目录列表中查看<br>
屏幕较小的设备可通过点击右上角的 `On this page` 查看
:::


## EssentialsX


1. `/list` --> 查看当前在线的玩家

2. `/msg <玩家> <信息>` --> 私聊某玩家
   > 别名：`/m` , `/t` , `/whisper`<br>
   > 私聊内容不会在服务器控制台显示

3. `/afk` --> 设置是否为AFK（暂时离开）状态

4. `/help [指令名]` --> 查看帮助

5. `/getpos [玩家]` --> 查看某玩家坐标

6. `/near [半径]` --> 查看附近的玩家

7. `/rules` --> 查看服务器规则

8. `/suicide` --> 自杀

9. `/whois [玩家名]` --> 显示一个玩家的信息

10. `/sethome <家>` --> 在玩家当前位置设置家
    > 别名：`/createhome`
    

11. `/delhome <家>` --> 删除玩家的家
    > 别名：`/rmhome` , `/remhome`


12. `/home <家>` --> 回家
    > 别名：`/homes`
    

13. `/tpa <玩家>` --> 请求传送到一个玩家身边
    > 别名：`/call` , `/tpask`
    

14. `/tpaall [玩家]` --> 请求所有人传送到你身边
    

15. `/tpaccept [玩家]` --> 同意一个传送请求
    > 别名：`/tpyes`
    

16. `/tpdeny` --> 拒绝一个传送请求
    > 别名：`/tpno`
    

17. `/tpahere [玩家]` --> 请求一个玩家传送到你身边

18. `/tppos [坐标]` --> 传送至某地点

19. `/tpoffline [玩家]` --> 传送至某玩家的最后下线地点

20. `/gc` --> 查看服务器的使用信息
    > 别名：`/lag` , `/tps` , `/mem` , `/uptime` , `/memory` , `/entities`
    

21. `/hat` --> 把手上的物品戴到头上 / 把头上的物品拿下来
    > 别名：`/head`
    

## MyWarp

1. `/setwarp <传送点名称>` --> 在玩家当前位置设置一个传送点
    > 传送点名称仅能使用 **汉字、字母、数字** ，不支持 **符号**

2. `/mywarp` --> 查看传送点相关指令帮助

3. `/mywarp gui` --> 打开传送点列表GUI界面

4. `/warplist` --> 列出所有的传送点

5. `/warp <传送点名称>` --> 传送到指定传送点

## WorldEdit

相关指令参见 [WorldEdit/命令列表 - Minecraft插件百科](https://mineplugin.org/WorldEdit/命令列表)

## Image

1. `/image create <图片名称|图片直链> [缩放百分比]` --> 创建并开始粘贴新的自定义图像

2. `/image delete` --> 通过单击现有图像来删除它

3. `/image delete near <范围>` --> 删除范围内的图像

4. `/image list` --> 显示可以添加的图像选项列表

## ChestProtect

1. `/cp` --> 打开主菜单
    > 别名：`/chestprotect`<br>
    > `/cp menu` 有同样效果

2. `/cp help` --> 查看所有可用的命令
    > 别名：`/chestprotect help`

3. `/cp lock` --> 进入锁定模式并通过与某物交互来锁定它
    > 别名：`/chestprotect lock`

4. `/cp unlock` --> 进入解锁模式并通过与其交互来解锁保护
    > 别名：`/chestprotect unlock`

5. `/cp trust <玩家名>` --> 进入信任模式并通过与 **保护的物品交互** 来信任特定玩家
    > 别名：`/chestprotect trust <玩家名>`
   

6. `/cp untrust <玩家名>` --> 进入不信任模式并通过与 **保护的物品交互** 来不信任特定玩家
    > 别名：`/chestprotect untrust <玩家名>`
   

7. `/cp exit` --> 当处于锁定、解锁、信任或不信任模式时，使用指令退出这些模式
    > 别名：`/chestprotect exit`
   

## Kiss and Slap

1. 操作：`Shift` + `鼠标左键` --> 打玩家一巴掌
    > 需要对着指定玩家

2. 操作：`Shift` + `鼠标右键` --> 亲玩家一口
    > 需要对着指定玩家

## creative-glyphs

- `/emojis` --> 展示表情列表
    > **基岩版暂不可用** / 点击列表上的表情即可发送

## FakePlayer  

1. `/fp spawn` --> 召唤假人  

2. `/fp kill` --> 杀死假人  

3. `/fp select` --> 选中假人
    > 当假人数量≥2时可用 

4. `/fp selection` --> 查看选中假人
    > 当假人数量≥2时可用

5. `/fp list` --> 查看已召唤的假人  

6. `/fp distance` --> 查看与假人的距离  

7. `/fp drop` --> 丢弃手上一个物品  

8. `/fp dropstack` --> 丢弃手上整组物品  

9. `/fp dropinv` --> 丢弃背包所有物品  

10. `/fp skin` --> 复制玩家皮肤
    > 非在线玩家有60秒冷却

11. `/fp invsee` --> 查看假人背包
    > 右键假人也可触发

12. `/fp sleep` --> 睡觉  

13. `/fp wakeup` --> 起床  

14. `/fp status` --> 查看假人状态  

15. `/fp respawn` --> 复活死亡假人

16. `/fp tp` --> 传送到假人身边  

17. `/fp tphere` --> 让假人传送到你身边  

18. `/fp tps` --> 与假人交换位置  

19. `/fp set` --> 更改假人配置  

20. `/fp config` --> 更改默认假人配置  

21. `/fp expme` --> 吸收假人经验值  

22. `/fp attack` --> 攻击  

23. `/fp mine` --> 挖掘  

24. `/fp use` --> 使用/交互/放置  

25. `/fp jump` --> 跳跃  

26. `/fp stop` --> 停止所有行为  

27. `/fp turn` --> 转身  

28. `/fp look` --> 看向指定位置  

29. `/fp move` --> 移动  

30. `/fp ride` --> 骑乘  

31. `/fp sneak` --> 潜行  

32. `/fp sprint` --> 疾跑  

33. `/fp swap` --> 交换主副手物品  

34. `/fp hold` --> 手持对应快捷栏物品  


## VeinMiner

- 操作：`~键`
   > 按住指定按键即可使用