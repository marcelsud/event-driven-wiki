import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Conceitos Essenciais",
    Svg: require("@site/static/img/undraw_programming_65t2.svg").default,
    description: (
      <>
        Compreenda as bases teóricas e práticas da Arquitetura Orientada a
        Eventos, incluindo terminologia, padrões e princípios-chave.
      </>
    ),
  },
  {
    title: "Ferramentas e Ecossistemas",
    Svg: require("@site/static/img/undraw_software-engineer_xv60.svg").default,
    description: (
      <>
        Explore plataformas populares, como Apache Kafka, RabbitMQ, Amazon
        Kinesis e Apache Pulsar, bem como soluções de processamento de streams
        como Apache Flink e Spark Streaming.
      </>
    ),
  },
  {
    title: "Boas Práticas de Implementação",
    Svg: require("@site/static/img/undraw_coding_joxb.svg").default,
    description: (
      <>
        Aprenda a lidar com escalabilidade, observabilidade, garantia de
        entrega, segurança, versionamento de esquemas e muito mais.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
