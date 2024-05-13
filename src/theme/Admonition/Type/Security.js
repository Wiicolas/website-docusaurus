"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var clsx_1 = require("clsx");
var Translate_1 = require("@docusaurus/Translate");
var Layout_1 = require("@theme/Admonition/Layout");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var infimaClassName = 'alert alert--security';
var defaultProps = {
    icon: <react_fontawesome_1.FontAwesomeIcon icon={free_solid_svg_icons_1.faShieldHalved}/>,
    title: (<Translate_1.default id="theme.admonition.security" description="The default label used for the Security admonition (:::security)">
      security
    </Translate_1.default>),
};
function AdmonitionTypeSecurity(props) {
    return (<Layout_1.default {...defaultProps} {...props} className={(0, clsx_1.default)(infimaClassName, props.className)}>
      {props.children}
    </Layout_1.default>);
}
exports.default = AdmonitionTypeSecurity;