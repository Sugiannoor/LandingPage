import { Badge } from "./ui/badge";

export const SkillList = () => {
  return (
    <section className="mt-16">
      <div className="flex flex-col md:flex-row justify-center gap-5 xl:gap-20">
        <div>
          <h2 className="text-2xl text-center md:text-4xl font-semibold">
            Basic Skill
          </h2>
          <div className="text-center">
            <Badge className="h-1 w-12"></Badge>
          </div>
          <div className="flex xl:justify-center h-24 gap-5 mt-6 overflow-x-scroll" style={{scrollbarWidth: 'none'}}>
            <img
              className="rounded-md"
              src="/javascript.png"
              alt="javascript"
            />
            <img
              className="rounded-md"
              src="/typescript.png"
              alt="typescript"
            />
            <img src="/react.webp" alt="React Js" />
            <img src="/reactquery.png" alt="React Query" />
            <img src="/reactTable.svg" alt="React Table" />
            <img src="/tailwind.webp" alt="Tailwind CSS"/>
            <img className="rounded-md" src="/mantineUI.png" alt="Mantine UI"/>
            <img src="/boostrap.png" alt="boostrap CSS"/>

          </div>
        </div>
      </div>
    </section>
  );
};
