## 个人简历


### 三人公用简历模板

- 主要通过环境变量差异化打包替换个人logo以及简历内容，通过env.development进行差异化配置
- 在 `/utils/config.ts` 中可以获取到所有的差异化环境变量，在模板中或者ts文件中可以引入`/utils/config.ts`来获取差异化变量进行展示打包

test