var host_name = '192.168.1.75',
    host_port = '8000';

module.exports = { 
    host_name: host_name, //本地开启服务host
    host_port: host_port, //本地开启服务port
	baseUrl: 'http://192.168.1.169', //接口地址
	baseJs: 'http://' + host_name + ':' + host_port, //前端构建地址
    staticUrl: './', //静态资源路径
	env: 'local' //当前环境
};

