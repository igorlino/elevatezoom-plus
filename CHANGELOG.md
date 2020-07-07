<a name="1.2.5"></a>

# 1.2.5 (2020-07-July)

+ FIX: problems using ezPlus with multiple images on my page, only same container with identical ID needs to be removed. Issue #120 (Thanks volkerdobler) 

<a name="1.2.4"></a>
# 1.2.4 (2018-12-September)

+ FIX: Responsive feature does not destroy zoomContainers. Issue #36
+ FIX: Fix zoom lens and window positioning inside dialog. When initialising ezPlus on an element present inside a dialog the positions will not be correct unless the dialog occupies the entire viewport. These page offsets will help zoom lens and zoom window to be positioned correctly

<a name="1.2.3"></a>

# 1.2.3 (2018-01-July)

+ FIX: Fix for inner zoomType with scrollZoom from triggering error and not working.
TypeError: self.zoomLens is undefined line:1197

+ IMPROVEMENT:
jQuery .data() is initially populated with values from the data- attributes, but setting it only stores the associated new value in memory. It doesn't change the attribute in the DOM. 
This will make possible, populating the data with new information and ez-plus read the new information.

<a name="1.2.2"></a>

# 1.2.2 (2017-27-November)

+ CORE: lots and lots of code quality improvements  (thnxs Gregor Adams !!!)
+ FEATURE: add option to gallery swap event (thnxs shrpne)
+ FEATURE: added custom zoomContainer (thnxs David Rosendo)
+ FIX: properly remove event handlers on destroy (thxs shrpne)
+ FIX: IE 11 compatibility (thnxs Michael Thessel)


<a name="1.2.1"></a>

# 1.2.1 (2017-03-March)

+ NPM: Fixes delayed version 

+ NPM: Add main property to package.json to support vanilla require statement

+ CORE: add a update left

+ CORE: use a function to change the offset in new container

+ CORE: added lens override for window width to 0 (default value can create unwanted scroll on mobile devices);
+ CORE: tint image src changed to thumbnail src instead of zoom image src

+ CORE: fixed lensColour tint override to 'transparent' instead of 'none';
+ CORE: style reformated and removed duplicate rules applied in getWindowLensStyle();
+ CORE: added missing cursor rule for lens type.

+ CORE: fixed lens and inner zoom not working for touchmove action;
+ CORE: added lensColour as background-color to lens style;
+ CORE: style rules reformat;
+ CORE: isInteger IE fix


<a name="1.2.0"></a>

# 1.2.0 (2016-24-August)

+ BOWER: Fixes dependency missing on grunt wiredep
+ DOC: Correcting version in js and link for CDN
+ DOC: Correction option name for lens border 'lensSizeBorder'
+ BUILD: use semantic version, keeping parity with angular-elevate-zoom 

<a name="1.1.20"></a>

# 1.1.20 (2016-28-April)

+ Fix for bug in the zoom calculation for images with greater width.

<a name="1.1.19"></a>

# 1.1.19 (2016-23-March)

+ Fix for bug in the zoom calculation for images with greater width.

<a name="1.1.18"></a>

# 1.1.18 (2015-20-Dec)

+ Set minZoomLevel to 1.01, that helps to zoom small images.

<a name="1.1.2"></a>

# 1.1.2 (2015-01-June)

+ Corrected hundreds of JSHint errors/warnings
+ Added JSCS code style validation.
+ Corrected hundreds of JSCS warnings.
+ Fixed unwanted global variables.
+ Fixed closeAll method not working at all.

<a name="1.1.1"></a>

# 1.1.1 (2015-01-June)

+ Feature: Adding support to multiple galleries. …
This change provides:
    Flexibility to select the element with a another selector different of the id. Providing you support to multiples galleries.
    Adding galleryItem option to choose another item type
    All elements added to gallery, now inherit the onclick event
+ Fix width scale error
+ Feature: Added callback function 'onDestroy'. It is useful to destroy/hide 'zoomContainer' div when working with single page application (e.g; AngularJS application)
+ Remove support for deprecated mousewheel event and replace with wheel  event.
See: https://developer.mozilla.org/en-US/docs/Web/Events/mousewheel
+ Add z_index option to set z-index of container.
+ Fix: round lens position to avoid border flickering.
+ Fixed broken CSS
+ Fix: remove -webkit-transform: translateZ(0); because it breaks z-index properties
+ Improvement: Renamed "Postition" to "Position" for better consistency.
+ Improvement: Change cursor default value to inherit
+ Feature: Add mantainZoomAspectRatio as option. This change will allow to decide if you want to decrease zoom of one of the dimensions once the other reached it's top value, or keep the aspect ratio, default behaviour still being as always, allow to continue zooming out, so it keeps retrocompatibility.
+ Improvement: Added callback for when zoomWindow is just about to be shown. The zoomWindow would often fall offscreen, so I added a callback just before it is shown so that repositioning it is possible.
+ Improvement: Optimizes calls to css(), width() and height() for performance reasons.
Profiling has shown that calls of the jquery css() method consumed very much time when moving the lens. This resulted in lags when moving the lens fast in Firefox and IE. By optimizing the css() calls (and also width() / height() methods) and the their parameters, the lags are now almost gone.
+ Fixed Duplicate self.options.zoomWindowWidth
+ Move zoom container parent selector to options.
+ Fix lens proportion calculation. The condition was incorrectly checking for the width of the zoom window instead of the height, causing the lens to be equal height with the non-zoomed image when the actual viewport was smaller
+ add option to specify a click callback (for the large image) add API document



<a name="1.0.0"></a>

# 1.0.0 (2015-28-May)
+ build v1.0.1
+ Initial commit, it includes bower repository settings.
+ Refactor naming.
