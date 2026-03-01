"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { Cta } from "./Cta";
import * as _utils from "./utils";
import _styles from "./ContactSection.module.css";

export function ContactSection({
  as: _Component = _Builtin.Section,
  ctaCtaLinkText = "Reach out",
  headingTitle = "Have an idea, a question, or a plan?",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "section_contact")}
      grid={{
        type: "section",
      }}
      tag="section"
    >
      <_Builtin.Block className={_utils.cx(_styles, "u-container")} tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "contact_wrap", "text-color-cream")}
          tag="div"
        >
          <_Builtin.Heading
            className={_utils.cx(
              _styles,
              "contact-heading",
              "u-text-style-h3",
              "u-max-width-16ch"
            )}
            tag="h2"
          >
            {headingTitle}
          </_Builtin.Heading>
          <_Builtin.Block
            className={_utils.cx(_styles, "home-cta_wrap", "is-contact")}
            id={_utils.cx(
              _styles,
              "w-node-_33f30efb-2822-d08a-1e96-1fd65429d063-5429d05e"
            )}
            tag="div"
          >
            <Cta
              linkText={ctaCtaLinkText}
              link={{
                href: "mailto:team@indianvcs.com",
              }}
            />
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "mail-img-wrap")}
            id={_utils.cx(
              _styles,
              "w-node-_33f30efb-2822-d08a-1e96-1fd65429d066-5429d05e"
            )}
            tag="div"
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "mail-img")}
              loading="lazy"
              width="auto"
              height="auto"
              alt=""
              src="https://cdn.prod.website-files.com/68d52ca13b12ca1b4495cd85/690dac99bd9a0e54d595bc2f_mail.png"
            />
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "footer_divider_band")}
        tag="div"
      />
    </_Component>
  );
}
