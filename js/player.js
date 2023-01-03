//创建一个音乐播放器的类 单例模式
class Player {
    constructor() { //类的构造函数
        //如果没有实例化，就去构造一个实例
        return this.getInstance(...arguments);