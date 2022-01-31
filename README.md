This repo has been created to demostrate issue that happens when using svelte-testing-library, that seems to have something to do with components that use slots not firing events correctly? 

i'm using the `Button` component from carbon-components-svelte with the `as` prop which renders the components with a slot to demonstrate this. The component defintion is here - https://github.com/carbon-design-system/carbon-components-svelte/blob/master/src/Button/Button.svelte

You can see in https://github.com/PClmnt/svelte-testing-library-issue/blob/900a6ac2af49a8f7d6ebc2477ecab5efc28c68ae/src/lib/ConditionalTest.svelte that there is a conditional that is trigged on the Button click. 

However, the else part of the conditional is never triggered when using `fireEvent.click` within https://github.com/PClmnt/svelte-testing-library-issue/blob/900a6ac2af49a8f7d6ebc2477ecab5efc28c68ae/src/lib/test/ConditionalTest.spec.js and therefore the test fails as it cannot see the text within the conditional. 



To see this happening clone the repo and

```
yarn

yarn test

```

and you will see the output showing that the conditional isn't showing. 

```
  ConditionalTest
    ✕ Navigates past the first selection (1047 ms)

  ● ConditionalTest › Navigates past the first selection

    Unable to find an element with the text: /example text?/i. This could be because the text is broken up by multiple elements. In this case, you can provide a function for your text matcher to make your matcher more flexible.

    <body>
      <div>
        <section>
          <div>
            <span>
              test
            </span>

          </div>
        </section>
      </div>
    </body>

      11 |         await fireEvent.click(button)
      12 |         debug()
    > 13 |         expect(await screen.findByText(/example text?/i)).toBeInTheDocument()
         |                             ^
      14 |     })
      15 | })
```
