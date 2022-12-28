## Property 추가 / 수정 / 삭제하기
***
> ## Property 추가하기

### 오브젝트 정의
```
{
  const codeit = {
    name: '코드잇',
    bornYear: 2017,
    founders: ['강영훈','이윤수'],
    worstCourse: null,
    bestCourse: {
      title: '자바스크립트 프로그래밍 기초',
      language: 'JavaScript'
    },
  };
}
```
***
> ### color Property 추가하기

```
codeit.color = 'purple'; // 점 표기법
codeit['color'] = 'purple'; // 대괄호 표기법
```

> ### bornYear Property의 값 변경하기

```
codeit.bornYear = 2019; // 점 표기법
codeit['bornYear'] = 2019; // 대괄호 표기법
```

> ### Property 삭제하기
- delete \[지우고싶은property\]
```
delete codeit.name; // 점 표기법
delete codeit['name']; // 대괄호 표기법
```

