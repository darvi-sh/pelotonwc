import './button.css';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/configure/#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'ButtonJS',
};

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary = {
  render: (args) => {
    const btn = document.createElement('button');
    btn.innerText = args.label;

    const mode = args.primary ? 'storybook-button--primary' : 'storybook-button--secondary';
    btn.className = ['storybook-button', 'storybook-button--medium', mode].join(' ');

    return btn;
  },
  args: {
    primary: true,
    label: 'ButtonJS',
  },
};
