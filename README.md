# todoListProject

todo > 하나의 객체이다.
title, description, dueDate, priority, notes or checklist가 있는게 좋다.
list는 각각 projects와 todo리스트가  따로 있었으면 좋겠고 default project가 처음 열면 있었으면 좋겠다. (모든 todo가 있는)
새로운 프로젝트를 더할 수 있고 어떤 프로젝트가 todo들이 있을지를 정한다.
application logic을 따로 놓는다. (function folder)
view all projects, view all todos in each project, expand a single todo to see edit its details, delete a todo
https://github.com/date-fns/date-fns date time library
https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API web storage api
  데이터가 없어도 crash되지 않게 하라
  DevTool을 이용해서 data를 inspect할 수 있다. Application tab>Storage>Local Storage에 있음