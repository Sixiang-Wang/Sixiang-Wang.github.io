// 动态标题和图标
var OriginTitle = document.title;
var OriginIcon = document.querySelector("link[rel~='icon']").href || '/img/favicon.ico'; // 保存原始图标路径
var LeaveIcon = '/img/failure.ico'; // 替换为离开时的图标路径
var titleTime;

// 监听页面可见性变化
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        // 离开当前页面时
        document.title = '(´Д｀)别离开我~';
        changeFavicon(LeaveIcon); // 修改为离开图标
        clearTimeout(titleTime);
    } else {
        // 返回当前页面时
        document.title = '（●´3｀●）お帰りなさい～';
        changeFavicon(OriginIcon); // 恢复原始图标
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000);
    }
});

// 修改图标函数
function changeFavicon(iconUrl) {
    var link = document.querySelector("link[rel~='icon']");
    if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.head.appendChild(link);
    }
    link.href = iconUrl;
}
