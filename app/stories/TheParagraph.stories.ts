
import { storiesOf } from '@storybook/vue'
// @ts-ignore
import TheParagraph from '@components/TheParagraph'

storiesOf('Components', module).add(
  'TheParagraph',
  () => ({
    components: { TheParagraph },
    template: `
<the-paragraph text="paragraph"></the-paragraph>
`
  }),
  {
    info: {}
  }
)