"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { NavLink } from "./NavLink";
import * as _utils from "./utils";
import _styles from "./Navbar.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e":{"id":"e","name":"","animationType":"custom","eventTypeId":"NAVBAR_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"48999075-b53f-4bed-44bf-cd5717cf04a7","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"48999075-b53f-4bed-44bf-cd5717cf04a7","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759340277422},"e-2":{"id":"e-2","name":"","animationType":"custom","eventTypeId":"NAVBAR_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"48999075-b53f-4bed-44bf-cd5717cf04a7","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"48999075-b53f-4bed-44bf-cd5717cf04a7","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759340277423}},"actionLists":{"a":{"id":"a","title":"Navbar 1 menu [Close]","actionItemGroups":[{"actionItems":[{"id":"a-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"inOutQuint","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-middle","selectorGuids":["d77f597a-27f7-0d59-8ff2-10d09c95d49c"]},"widthValue":0,"widthUnit":"%","heightUnit":"PX","locked":false}},{"id":"a-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-bottom","selectorGuids":["d77f597a-27f7-0d59-8ff2-10d09c95d499"]},"yValue":-7,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-top","selectorGuids":["d77f597a-27f7-0d59-8ff2-10d09c95d494"]},"yValue":7,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-top","selectorGuids":["d77f597a-27f7-0d59-8ff2-10d09c95d494"]},"zValue":-45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-n-5","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-bottom","selectorGuids":["d77f597a-27f7-0d59-8ff2-10d09c95d499"]},"zValue":45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]},{"actionItems":[{"id":"a-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".nav-menu-overlay","selectorGuids":["61a0327b-7a5a-f0df-02a8-5ceea7f03d8e"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626168378054},"a-2":{"id":"a-2","title":"Navbar 1 menu [Open]","actionItemGroups":[{"actionItems":[{"id":"a-2-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".nav-menu-overlay","selectorGuids":["61a0327b-7a5a-f0df-02a8-5ceea7f03d8e"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-2-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-bottom","selectorGuids":["d77f597a-27f7-0d59-8ff2-10d09c95d499"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-2-n-5","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"inOutQuint","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-middle","selectorGuids":["d77f597a-27f7-0d59-8ff2-10d09c95d49c"]},"widthValue":100,"widthUnit":"%","heightUnit":"PX","locked":false}},{"id":"a-2-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-top","selectorGuids":["d77f597a-27f7-0d59-8ff2-10d09c95d494"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-2-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-bottom","selectorGuids":["d77f597a-27f7-0d59-8ff2-10d09c95d499"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-2-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-top","selectorGuids":["d77f597a-27f7-0d59-8ff2-10d09c95d494"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626168766736}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Navbar({ as: _Component = _Builtin.NavbarWrapper }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "navbar")}
      tag="div"
      id="navbar"
      config={{
        animation: "over-right",
        collapse: "all",
        docHeight: true,
        duration: 500,
        easing: "ease",
        easing2: "ease",
        noScroll: true,
      }}
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "navbar_contain")}
        tag="div"
      >
        <_Builtin.NavbarBrand
          className={_utils.cx(_styles, "brand")}
          id={_utils.cx(
            _styles,
            "w-node-d44d8087-4660-87b1-a70d-ea2497e04223-97e04221"
          )}
          options={{
            href: "/about-us",
          }}
        >
          <_Builtin.Image
            className={_utils.cx(_styles, "image-2")}
            loading="lazy"
            width="auto"
            height="auto"
            alt="indian vc logo"
            src="https://cdn.prod.website-files.com/68d52ca13b12ca1b4495cd85/68dbb0684eaba8e10c5b9cbf_Indian%20VC%20Logo.svg"
          />
        </_Builtin.NavbarBrand>
        <NavLink
          navLinkText="Funds"
          link={{
            href: "/",
          }}
        />
        <_Builtin.Block
          className={_utils.cx(_styles, "nav-link-wrap", "desktop")}
          id={_utils.cx(
            _styles,
            "w-node-_623e4d13-1e9f-3a0d-3bd0-48a2bb16708a-97e04221"
          )}
          tag="div"
        >
          <NavLink
            link={{
              href: "/themes",
            }}
          />
          <_Builtin.Block
            className={_utils.cx(_styles, "hidden-links")}
            tag="div"
          >
            <_Builtin.Link
              className={_utils.cx(_styles, "nav-hidden-link")}
              button={false}
              block="inline"
              options={{
                href: "/themes/round-focus",
              }}
            />
            <_Builtin.Link
              className={_utils.cx(_styles, "nav-hidden-link")}
              button={false}
              block="inline"
              options={{
                href: "/themes/sector-focus",
              }}
            />
          </_Builtin.Block>
        </_Builtin.Block>
        <NavLink
          navLinkText="VC Hub"
          link={{
            href: "https://hub.indianvcs.com",
            target: "_blank",
          }}
        />
        <_Builtin.NavbarMenu
          className={_utils.cx(_styles, "nav-menu")}
          tag="nav"
          role="navigation"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "nav-menu_links_wrap")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "nav-menu_links")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "nav-link-wrap")}
                tag="div"
              >
                <_Builtin.Link
                  className={_utils.cx(
                    _styles,
                    "nav_link-c",
                    "u-text-style-large",
                    "u-text-transform-uppercase",
                    "hide-on-desktop"
                  )}
                  button={false}
                  block="inline"
                  options={{
                    href: "/themes",
                  }}
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "nav_link_text_wrap")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "nav_link_text")}
                      tag="div"
                    >
                      {"Themes"}
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "nav_link_text_line")}
                      tag="div"
                    />
                  </_Builtin.Block>
                </_Builtin.Link>
                <_Builtin.Block
                  className={_utils.cx(_styles, "hidden-links")}
                  tag="div"
                >
                  <_Builtin.Link
                    className={_utils.cx(_styles, "nav-hidden-link")}
                    button={false}
                    block="inline"
                    options={{
                      href: "/themes/round-focus",
                    }}
                  />
                  <_Builtin.Link
                    className={_utils.cx(_styles, "nav-hidden-link")}
                    button={false}
                    block="inline"
                    options={{
                      href: "/themes/sector-focus",
                    }}
                  />
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Link
                className={_utils.cx(
                  _styles,
                  "nav_link-c",
                  "u-text-style-large",
                  "u-text-transform-uppercase",
                  "hide-on-desktop"
                )}
                button={false}
                block="inline"
                options={{
                  href: "/",
                }}
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "nav_link_text_wrap")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "nav_link_text")}
                    tag="div"
                  >
                    {"Funds"}
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "nav_link_text_line")}
                    tag="div"
                  />
                </_Builtin.Block>
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(
                  _styles,
                  "nav_link-c",
                  "u-text-style-large",
                  "u-text-transform-uppercase",
                  "hide-on-desktop"
                )}
                button={false}
                block="inline"
                options={{
                  href: "/about-us",
                }}
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "nav_link_text_wrap")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "nav_link_text")}
                    tag="div"
                  >
                    {"About Us"}
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "nav_link_text_line")}
                    tag="div"
                  />
                </_Builtin.Block>
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(
                  _styles,
                  "nav_link-c",
                  "u-text-style-large",
                  "u-text-transform-uppercase",
                  "hide-on-desktop"
                )}
                button={false}
                block="inline"
                options={{
                  href: "https://hub.indianvcs.com",
                  target: "_blank",
                }}
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "nav_link_text_wrap")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "nav_link_text")}
                    tag="div"
                  >
                    {"VCHUB"}
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "nav_link_text_line")}
                    tag="div"
                  />
                  <_Builtin.Block
                    className={_utils.cx(_styles, "coming-soon")}
                    tag="div"
                  >
                    {"(Coming soon)"}
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.HtmlEmbed
                  className={_utils.cx(_styles, "hide")}
                  content=""
                  value="%3Cstyle%3E%0A%20%20%40media%20(max-width%3A%20991px)%7B%0A%20%20%20%20.nav_link-c.no-touch%20.coming-soon%7B%0A%09%09%09display%3A%20block%3B%0A%20%20%20%20%7D%0A%20%20%20%20.nav_link-c.no-touch%7B%0A%20%20%20%20%09opacity%3A%200.5%3B%0A%20%20%20%20%20%20pointer-events%3A%20none%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%3C%2Fstyle%3E"
                />
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(
                  _styles,
                  "nav_link-c",
                  "u-text-style-large",
                  "u-text-transform-uppercase",
                  "hide"
                )}
                button={false}
                block="inline"
                options={{
                  href: "/fundraising-os",
                }}
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "nav_link_text_wrap")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "nav_link_text")}
                    tag="div"
                  >
                    {"Fundraising OS"}
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "nav_link_text_line")}
                    tag="div"
                  />
                </_Builtin.Block>
              </_Builtin.Link>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "nav-menu_bottom_text_wrap")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "nav-menu_bottom_text",
                  "u-text-style-h5",
                  "pretty"
                )}
                tag="div"
              >
                {"Indian VCs, the go-to for anything VC."}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "nav-menu-strip")}
              tag="div"
            />
          </_Builtin.Block>
        </_Builtin.NavbarMenu>
        <_Builtin.Block
          className={_utils.cx(_styles, "nav-menu-overlay")}
          tag="div"
        />
        <_Builtin.Block
          className={_utils.cx(_styles, "menu-wrap")}
          id={_utils.cx(
            _styles,
            "w-node-d44d8087-4660-87b1-a70d-ea2497e0424b-97e04221"
          )}
          tag="div"
        >
          <_Builtin.HtmlEmbed
            className={_utils.cx(_styles, "style")}
            content=""
            value="%3Cstyle%3E%0A%20%20.menu-btn.open%20.menu-icon_line-middle%7B%0A%20%20%20%20margin%3A%200%3B%0A%20%20%7D%0A%20%20.menu-btn.open%20.menu-icon_line-top%7B%0A%20%20%20%20transform%3A%20translateY(1px)%20rotate(45deg)%3B%0A%20%20%7D%0A%20%20.menu-btn.open%20.menu-icon_line-bottom%7B%0A%20%20%20%20transform%3A%20translateY(-1px)%20rotate(-45deg)%3B%0A%20%20%7D%20%0A%20%20.menu-btn.open%20.menu-icon_line-middle%7B%0A%20%20%20%20width%3A%200%25%3B%0A%20%20%7D%0A%3C%2Fstyle%3E"
          />
          <_Builtin.NavbarButton
            className={_utils.cx(
              _styles,
              "menu-btn",
              "w-node-d44d8087-4660-87b1-a70d-ea2497e0424c-97e04221"
            )}
            id={_utils.cx(_styles, "menu-trigger")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "menu-icon_wrap")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "menu-icon")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "menu-icon_line-top")}
                  tag="div"
                />
                <_Builtin.Block
                  className={_utils.cx(_styles, "menu-icon_line-middle")}
                  tag="div"
                />
                <_Builtin.Block
                  className={_utils.cx(_styles, "menu-icon_line-bottom")}
                  tag="div"
                />
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.NavbarButton>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
