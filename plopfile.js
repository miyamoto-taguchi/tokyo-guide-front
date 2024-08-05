module.exports = function (plop) {
  /**
   * コンポーネントのテンプレートジェネレータ
   * ・コンポーネントファイル
   * ・ストーリーファイル
   * ・index.ts
   */
  plop.setGenerator("component", {
    description: "Generate a new component and story",
    prompts: [
      {
        type: "list",
        name: "level",
        message: "Select component level",
        choices: ["atoms", "molecules", "organisms", "templates"],
      },
      {
        type: "input",
        name: "name",
        message: "Component name please(it will be converted to PascalCase)",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/components/{{level}}/{{pascalCase name}}/{{pascalCase name}}.tsx",
        templateFile: "plop-templates/component.tsx.hbs",
      },
      {
        type: "add",
        path: "src/components/{{level}}/{{pascalCase name}}/{{pascalCase name}}.stories.tsx",
        templateFile: "plop-templates/story.tsx.hbs",
      },
      {
        type: "add",
        path: "src/components/{{level}}/{{pascalCase name}}/index.ts",
        templateFile: "plop-templates/index.ts.hbs",
      },
    ],
  });

  /**
   * ストーリーのテンプレートジェネレータ
   * ・ストーリーファイル
   */
  plop.setGenerator("stories", {
    description: "Generate a new story",
    prompts: [
      {
        type: "list",
        name: "level",
        message: "Select component level",
        choices: ["atoms", "molecules", "organisms", "templates"],
      },
      {
        type: "input",
        name: "name",
        message: "Component name please(it will be converted to PascalCase)",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/components/{{level}}/{{pascalCase name}}/{{pascalCase name}}.stories.tsx",
        templateFile: "plop-templates/story.tsx.hbs",
      },
    ],
  });
};
