# MovieRanker

### π [μ€ν](https://byeongminlee.github.io/MovieRanker/)

<br>

## π  Stack

<div>
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/>
    <img src="https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white"/>
    <img src="https://img.shields.io/badge/NAVER_API-03C75A?style=for-the-badge&logo=naver&logoColor=white"/>
    <img src="https://img.shields.io/badge/μνμ§ν₯μμν_API-3F4551?style=for-the-badge&logoColor=white"/>
</div>

<br>

## π μκ°

λ μ§λ³ μν λ­νΉμ λ³΄μ¬μ£Όλ μ¬μ΄νΈ μλλ€.<br>
μνμ§ν₯μμνμμ λ μ§λ³ λ°μ€μ€νΌμ€ TOP10μ κ°μ Έμ΅λλ€. <br>
κ·Έλ¦¬κ³  μνμ§ν₯μμνμμλ μνμ ν¬μ€ν° μ¬μ§μ μ κ³΅νμ§ μμΌλ―λ‘ λ°μ€μ€νΌμ€ μμλ‘ μνμ λͺ©μΌλ‘ λ€μ΄λ² μν κ²μ APIλ₯Ό μ¬μ©ν΄μ μνμ λν μ λ³΄λ₯Ό κ°μ Έμ΅λλ€. <br>

![μ¬μ§](./readmeImg/main.png)

<br>

|                                                             μν κ°λ³ μκ°                                                             |                                                               λ μ§ λ³κ²½                                                                |
| :------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------: |
| <p style='text-align:left'>λ μ§λ₯Ό μ¬ μ ννλ©΄ μνμ§ν₯μμμ μλ‘ λ°μ΄ν°λ₯Ό κ°μ Έμ΅λλ€.</p><br>![μν κ°λ³ μκ°](./readmeImg/slide.gif) | <p style='text-align:left'>λ€μ΄λ² APIλ₯Ό μ¬μ©ν¨μΌλ‘μ¨ μν νμ κ³Ό ν¬μ€ν°λ₯Ό νλ©΄μ λ³΄μ¬μ€λλ€.</p><br>![λ μ§ λ³κ²½](./readmeImg/date.gif) |

<br>

## βοΈ μ€μΉ

1. ν΄λ‘  λ°κΈ°

    ```sh
    $ git clone https://github.com/ByeongminLee/MovieRanker.git
    ```

2. openAPI KEYλ°κΈ

    λ€μ λκ³³μμ API λ°κΈ<br>
    [μνμ§ν₯μμν](https://www.kobis.or.kr/kobisopenapi/homepg/main/main.do)<br>
    [λ€μ΄λ² κ°λ°μ](https://developers.naver.com/)

3. <code>.env</code> νμΌ μμ±

    <code>/</code>(root) κ²½λ‘μ <code>.env</code>νμΌ μμ±ν λ€μκ³Ό κ°μ΄ μΆκ°

    ```md
    REACT_APP_MOVIE_RANK_URL = "μνμ§ν₯μν€"
    REACT_APP_NAVER_CLIENT_ID = "λ€μ΄λ² ID KEY"
    REACT_APP_NAVER_CLIENT_SECRET = "λ€μ΄λ² μν¬λ¦½ KEY"
    ```

<br>

## π νμΌ κ΅¬μ‘°

```md
src
βββ App.js
βββ Components
β βββ Card.js
β βββ Meta.js
β βββ Slide.js
β βββ Tables.js
βββ GlobalStyles.js
βββ Pages
β βββ Main.js
βββ imgs
β βββ noImg.png
βββ index.js
βββ slices
β βββ MovieRankSlice.js
β βββ MovieSearchSlice.js
βββ store.js
```
