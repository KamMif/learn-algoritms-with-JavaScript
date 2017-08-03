// Граф моделирует набор связей. Каждый граф состоит из узлов и ребер
// Если узел напрямую соединен с несколькими другими узлами - эти узлы называются соседями
// Граф используется для моделирования связей между разными обьектами

// Поиск в ширину позволяет ответить на вопросы двух типов:
            // -- Существует ли путь от узла А к узлу Б?
            // -- Как выглядит кратчайший путь от узла А к узлу Б?


// Алгоритм Дейкстры состоит из 4х шагов:
// - Найти узел с наименьшей стоимостью
// - Проверить, существование более дешевого пути к соседям этого узла и если существует, обновить их стоимости
// - Повторять, пока это не будет сделано для всех узлов графа
// - Вычислить итоговый путь