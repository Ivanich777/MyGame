# MyGame
# Своя игра

## Введение

Возможно вы смотрели телепередачу "Своя игра". Это телевизионная интеллектуальная игра, в которой игрокам предоставляется набор вопросов, разделенных по темам и сложности. Игроки выбирают тему, вопрос по которой хотят услышать, а затем выбирают сложность, от которой зависит количество очков, которые они могут заработать за правильный ответ.

Подробнее с данной телевизионной игрой можете ознакомиться [тут](https://ru.wikipedia.org/wiki/%D0%A1%D0%B2%D0%BE%D1%8F_%D0%B8%D0%B3%D1%80%D0%B0).
Ниже приведена картинка, демонстрирующая поле выбора вопросов.

![](your_game_board.png)

**Рисунок 1. Поле выбора вопросов**

Как вы уже могли догадаться, нам надо реализовать эту игру в веб вариации. Как всегда сроки уже поджимают: надо получить готовую бета-версию к сегодняшнему вечеру. В 17.00 необходимо показать приложение заказчику. Если приложение получится хорошим, и оно понравится заказчику - мы получим крупные инвестиции, что позволит нам развиваться дальше и выполнять более крупные и интересные проекты. Теперь все зависит от вас!


## Требования к приложению

У нашего заказчика много требований, рассмотрим все по порядку. Однако времени у нас не так много, поэтому не будем вдаваться в подробности.
1. Для начала в приложении необходима Регистрация, Аутентификация. Игроки должны иметь возможность заходить в свой личный кабинет, начинать игру, и не оставаться при этом анонимами. Нельзя забывать про хранение сессий. Игрок может сделать перерыв между ответами на вопросы, перейти на другую страницу сайта (например в личный кабинет), а затем вернуться назад. И конечно же при этом он не хочет потерять свой текущий результат.
2. Приложение необходимо, чтобы играть в "Свою игру" - соответственно нам необходима страница с самой игрой. Она не должна выглядеть слишком примитивно, внешний вид приложения часто бывает очень важен. На странице должна быть доска из вопросов (см. Рисунок 1). При нажатии на вопрос должно всплывать модальное окно с самим вопросом и полем для ввода ответа. Кроме того, у заказчика было важное требование: игроку дается ограниченное время на то, чтобы ответить на вопрос. Если игрок не успевает - теряет очки.
3. Вы знакомы с таким инструментом как AJAX(fetch), тут он может очень даже пригодиться. Заказчик не хотел бы, чтобы страница с игрой куда-либо перенаправляла пользователя. Если пользователь выбирает вопрос - появляется модальное окно. Если он отвечает на вопрос - то модальное окно пропадает, а сам вопрос либо пропадает с поля, либо как-нибудь помечается. 
4. Конечно нам хотелось бы отслеживать результаты игроков, чтобы потом определять победителей. Для этого тоже необходима отдельная страница. Еще лучше, если сайт будет позволять выкачивать xls-отчет о результатах игроков, но это требование не обязательно для бета-версии. 
5. Кстати, нашему заказчику известно что такое CRUD! Он требует чтобы пути на сайте игры выглядели строго и понятно, соответствовали стандартам и взаимодествовали с REST API архитектурой. 

И не забывайте про тщательное проектирование структуры базы данных! Ладно, теперь пора приступать! У вас все получится, мы верим в вас!
