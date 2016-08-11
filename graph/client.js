document.addEventListener("DOMContentLoaded", function(event) {

    var skills = [{
        id: 1,
        label: 'Навыки',
        color: {background:'#009999'}
    },{
        id: 2,
        parentId: 1,
        label: 'Технические'
    }, {
        id: 3,
        parentId: 2,
        label: 'Практические'
    }, {
        id: 6,
        parentId: 3,
        label: 'Системы контроля версий'
    }, {
        id: 7,
        parentId: 3,
        label: 'СУБД'
    }, {
        id: 8,
        parentId: 3,
        label: 'IDE и средства разработки'
    }, {
        id: 9,
        parentId: 3,
        label: 'Языки программирования'
    }, {
        id: 10,
        parentId: 3,
        label: 'Операционные системы'
    }, {
        id: 11,
        parentId: 3,
        label: 'Системы сборки проекта'
    }, {
        id: 12,
        parentId: 3,
        label: 'Debugging'
    }, {
        id: 13,
        parentId: 3,
        label: 'Работа с консолью'
    }, {
        id: 14,
        parentId: 3,
        label: 'Библиотеки и фреймворки'
    }, {
        id: 4,
        parentId: 2,
        label: 'Теоретические'
    }, {
        id: 27,
        parentId: 4,
        label: 'Облака'
    }, {
        id: 28,
        parentId: 4,
        label: 'Лицензирование'
    }, {
        id: 29,
        parentId: 4,
        label: 'Устройство и работа браузера'
    }, {
        id: 30,
        parentId: 4,
        label: 'Устройство и работа nodejs'
    }, {
        id: 31,
        parentId: 4,
        label: 'Компьютерная безопасность'
    }, {
        id: 32,
        parentId: 4,
        label: 'Тестирование'
    }, {
        id: 33,
        parentId: 4,
        label: 'Устройство сети'
    }, {
        id: 15,
        parentId: 4,
        label: 'Инфраструктура'
    }, {
        id: 17,
        parentId: 15,
        label: 'Деплой приложения'
    }, {
        id: 18,
        parentId: 15,
        label: 'Автоматизация'
    }, {
        id: 19,
        parentId: 15,
        label: 'Мониторинг здоровья сервиса'
    }, {
        id: 20,
        parentId: 15,
        label: 'Логирование'
    }, {
        id: 16,
        parentId: 4,
        label: 'Разработка'
    }, {
        id: 21,
        parentId: 16,
        label: 'Рефакторинг'
    }, {
        id: 22,
        parentId: 16,
        label: 'Непрерывная интеграция (CI)'
    }, {
        id: 23,
        parentId: 16,
        label: 'Архитектура приложений'
    }, {
        id: 24,
        parentId: 16,
        label: 'Web-стандарты и спецификация'
    }, {
        id: 25,
        parentId: 16,
        label: 'Языки программирования'
    }, {
        id: 26,
        parentId: 16,
        label: 'Контроль доступа'
    }, {
        id: 5,
        parentId: 1,
        label: 'Управленческие'
    }];

    var nodesData = skills.map(function (item) {
        return _.pick(item, 'id', 'label', 'color');
    });

    var edgesData = skills.map(function (item) {
        return {
            from: item.parentId,
            to: item.id
        };
    });

    var nodes = new vis.DataSet(nodesData);
    var edges = new vis.DataSet(edgesData);

    // create a network
    var container = document.getElementById('skills');

    var data = {
        nodes: nodes,
        edges: edges
    };

    var options = {
        // layout: {
        //     hierarchical: {
        //         nodeSpacing: 400,
        //         levelSeparation: 200,
        //         treeSpacing: 4000,
        //         direction: 'UD',
        //         sortMethod: 'hubsize'
        //     }
        // },
        nodes: {
            shape: 'dot',
            size: 20,
            font: {
                size: 16,
                color: '#d3d3d3'
            },
            borderWidth: 1,
            shadow:true
        },
        edges: {
            width: 1,
            shadow:true
        },
        interaction: {
            navigationButtons: true,
            keyboard: true,
            dragNodes :true
        },
        physics: {
            enabled: true
        }
    };


    var network = new vis.Network(container, data, options);


});
