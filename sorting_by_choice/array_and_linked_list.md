Память компьютера представляет собой нечто вроде огромного шкафа с множеством ящиков у которых есть свой адрес
Адрес ячеек в пямяти компьютера выглядит примерно так: fe0ffeeb;
Какждый раз при сохранении какой либо информации вы запрашиваете у компьютера место в памяти для этой информации
А он выдает адрес для ее хранения, для хранения ннескольких элементов в памяти можно воспользоваться массивами или
связанными списками.

МАССИВЫ:

+ Все значения хранятся в памяти непрерывно, то есть рядом друг с другом - это облегчает чтение;
- Для вставки нового элемента в массив необходимо запросить новую область памяти на все
  элементы массива + новый элемент и вставить их туда;
- При удалении элемента из массива нужно будет сдвинуть все элементы вверх

СВЯЗАННЫЕ СПИСКИ:

+ Элементы размещаются где угодно в памяти(могут находится в разных ячейках памяти)
+ В каждом элементе списка хранится адрес следующего элемента, таким образом элементы обьединяются
в цепочку.
+ Для добавления нового элемента нужно разместить его в любой области памяти(в любой ячейке)
 и сохранить этот адрес в предыдущем элементе
- Т.к. адрес следующего элемента лежит в предыдущем для нахождения произвольного элемента в
списке - нужно прочитать весь список  от начала до произвольного элемента.
