/**
 * @file Scene module
 * @description Basically a camera that can rotate, pan, zoom and contain voxels
 * @requires eventListener
 * @module core/Scene
 * @example <caption>Add a light source to a scene</caption>
 * const Voxelcss = require('voxelcss');
 * let scene = new Voxelcss.Scene();
 * let [x, y, z, d, dark, light] = [300, 300, 300, 750, 0.3, 1];
 * let source = new Voxelcss.LightSource(x, y, z, d, dark, light);
 * scene.attach(document.body);
 * scene.addLightSource(source);
**/
'use strict';

const eventListener = require('./eventListener');

const SHIFT_KEYCODE = 16;

module.exports = Scene;

// EVENTS
//    onorbit
//    onpan
//    onzoom
function Scene() {
    var self = this;
    var undefined;
    var parentContainer;
    var sceneElement;
    var zoomElement;
    var cameraElement;
    var isAttached = false;
    var rotation = {x: 0, y: 0, z: 0};
    var pan = {x: 0, y: 0, z: 0};
    var zoom = 1;
    var mouse = {
        start: {x: 0, y: 0},
        current: {x: 0, y: 0},
        lastMove: {x: 0, y: 0},
        shiftDown: false
    };
    var canOrbit = true;
    var canPan = true;
    var canZoom = true;
    var lightSources = [];
    var voxels = [];
    self.rotate = rotateScene;
    self.rotateX = rotateSceneX;
    self.rotateY = rotateSceneY;
    self.rotateZ = rotateSceneZ;
    self.pan = scenePan;
    self.panX = scenePanX;
    self.panY = scenePanY;
    self.panZ = scenePanZ;
    self.setPan = setScenePan;
    self.setPanX = setScenePanX;
    self.setPanY = setScenePanY;
    self.setPanZ = setScenePanZ;
    self.getPan = getScenePan;
    self.getPanX = getScenePanX;
    self.getPanY = getScenePanY;
    self.getPanZ = getScenePanZ;
    self.zoom = sceneZoom;
    self.setZoom = setSceneZoom;
    self.getZoom = getSceneZoom;
    self.attach = attachScene;
    self.detach = detachScene;
    self.isAttached = isSceneAttached;
    self.getParentElement = getParentElement;
    self.enableOrbit = EnableOrbit;
    self.disableOrbit = DisableOrbit;
    self.canOrbit = CanOrbit;
    self.enablePan = enableScenePan;
    self.disablePan = disableScenePan;
    self.canPan = canScenePan;
    self.enableZoom = enableSceneZoom;
    self.disableZoom = disableSceneZoom;
    self.canZoom = canSceneZoom;
    self.add = addVoxel;
    self.remove = removeVoxel;
    Object.assign(self, {
        setRotation,
        setRotationX,
        setRotationY,
        setRotationZ,
        getRotation,
        getRotationX,
        getRotationY,
        getRotationZ,
        getVoxels,
        addLightSource,
        getLightSources,
        removeLightSource
    });
    function rotateScene(x, y, z) {
        return {
            x: rotateSceneX(x),
            y: rotateSceneY(y),
            z: rotateSceneZ(z)
        };
    }
    function rotateSceneX(x) {
        if (x === undefined || typeof x !== 'number') {return rotation.x;}
        var old = rotation.x;
        rotation.x += x;
        updateSceneTransforms();
        return old;
    }
    function rotateSceneY(y) {
        if (y === undefined || typeof y !== 'number') {return rotation.y;}
        var old = rotation.y;
        rotation.y += y;
        updateSceneTransforms();
        return old;
    }
    function rotateSceneZ(z) {
        if (z === undefined || typeof z !== 'number') {return rotation.z;}
        var old = rotation.z;
        rotation.z += z;
        updateSceneTransforms();
        return old;
    }
    function setRotation(x, y, z) {
        var old = {
            x: setRotationX(x),
            y: setRotationY(y),
            z: setRotationZ(z)
        };
        updateSceneTransforms();
        return old;
    }
    function setRotationX(x) {
        if (x === undefined || typeof x !== 'number') {return rotation.x;}
        var old = rotation.x;
        rotation.x = x;
        updateSceneTransforms();
        return old;
    }
    function setRotationY(y) {
        if (y === undefined || typeof y !== 'number') {return rotation.y;}
        var old = rotation.y;
        rotation.y = y;
        updateSceneTransforms();
        return old;
    }
    function setRotationZ(z) {
        if (z === undefined || typeof z !== 'number') {return rotation.z;}
        var old = rotation.z;
        rotation.z = z;
        updateSceneTransforms();
        return old;
    }
    function getRotation() {
        return {
            x: rotation.x,
            y: rotation.y,
            z: rotation.z
        };
    }
    function getRotationX() {
        return rotation.x;
    }
    function getRotationY() {
        return rotation.y;
    }
    function getRotationZ() {
        return rotation.z;
    }
    function scenePan(x, y, z) {
        return {
            x: scenePanX(x),
            y: scenePanY(y),
            z: scenePanZ(z)
        };
    }
    function scenePanX(x) {
        if (x === undefined || typeof x !== 'number') {return pan.x;}
        var old = pan.x;
        pan.x += x;
        updateSceneTransforms();
        return old;
    }
    function scenePanY(y) {
        if (y === undefined || typeof y !== 'number') {return pan.y;}
        var old = pan.y;
        pan.y += y;
        updateSceneTransforms();
        return old;
    }
    function scenePanZ(z) {
        if (z === undefined || typeof z !== 'number') {return pan.z;}
        var old = pan.z;
        pan.z += z;
        updateSceneTransforms();
        return old;
    }
    function setScenePan(x, y, z) {
        var old = {
            x: setScenePanX(x),
            y: setScenePanY(y),
            z: setScenePanZ(z)
        };
        updateSceneTransforms();
        return old;
    }
    function setScenePanX(x) {
        if (x === undefined || typeof x !== 'number') {return pan.x;}
        var old = pan.x;
        pan.x = x;
        updateSceneTransforms();
        return old;
    }
    function setScenePanY(y) {
        if (y === undefined || typeof y !== 'number') {return pan.y;}
        var old = pan.y;
        pan.y = y;
        updateSceneTransforms();
        return old;
    }
    function setScenePanZ(z) {
        if (z === undefined || typeof z !== 'number') {return pan.z;}
        var old = pan.z;
        pan.z = z;
        updateSceneTransforms();
        return old;
    }
    function getScenePan() {
        return {
            x: pan.x,
            y: pan.y,
            z: pan.z
        };
    }
    function getScenePanX() {
        return pan.x;
    }
    function getScenePanY() {
        return pan.y;
    }
    function getScenePanZ() {
        return pan.z;
    }
    function sceneZoom(_zoom) {
        if (_zoom === undefined || typeof _zoom !== 'number') {
            return zoom;
        }
        var old = zoom;
        zoom += _zoom;
        updateSceneTransforms();
        return old;
    }
    function setSceneZoom(_zoom) {
        if (_zoom === undefined || typeof _zoom !== 'number') {
            return zoom;
        }
        zoom = _zoom;
        updateSceneTransforms();
        return zoom;
    }
    function getSceneZoom() {
        return zoom;
    }
    function attachScene(elem) {
        if (isAttached) {
            throw 'Cannot attach currently attached scene';
        }
        parentContainer = elem;
        elem.appendChild(sceneElement);
        isAttached = true;
    }
    function detachScene() {
        if (!isAttached) {
            throw 'Cannot detach currently detached scene';
        }
        isAttached = false;
        sceneElement.parentElement.removeChild(sceneElement);
    }
    function isSceneAttached() {
        return isAttached;
    }
    function getParentElement() {
        return parentContainer;
    }
    function EnableOrbit() {
        if (canOrbit) {return;}
        canOrbit = true;
    }
    function DisableOrbit() {
        if (!canOrbit) {return;}
        canOrbit = false;
    }
    function CanOrbit() {
        return canOrbit;
    }
    function enableScenePan() {
        if (canPan) {return;}
        canPan = true;
    }
    function disableScenePan() {
        if (!canPan) {return;}
        canPan = false;
    }
    function canScenePan() {
        return canPan;
    }
    function enableSceneZoom() {
        if (canZoom) {return;}
        canZoom = true;
    }
    function disableSceneZoom() {
        if (!canZoom) {return;}
        canZoom = false;
    }
    function canSceneZoom() {
        return canZoom;
    }
    function addVoxel(voxel) {
        cameraElement.appendChild(voxel.getDomElement());
        voxels.push(voxel);
        voxel.setParentScene(self);
        if (lightSources.length !== 0) {voxel.updateLightSource(lightSources);}
    }
    function removeVoxel(voxel) {
        cameraElement.removeChild(voxel.getDomElement());
        voxels.splice(voxels.indexOf(voxel), 1);
        voxel.removeParentScene();
    }
    function getVoxels() {
        return voxels.concat([]);
    }

    function addLightSource(source) {
        var index = lightSources.indexOf(source);
        if (index !== -1) {return false;}
        source.addEventListener('change', updateVoxelLighting);
        source.addEventListener('move', updateVoxelLighting);
        lightSources.push(source);
        updateVoxelLighting();
        return true;
    }
    function removeLightSource(source) {
        var index = lightSources.indexOf(source);
        if (index === -1) {return false;}
        source.removeEventListener('change', updateVoxelLighting);
        source.removeEventListener('move', updateVoxelLighting);
        lightSources.splice(index, 1);
        updateVoxelLighting();
        return true;
    }
    function getLightSources() {
        return lightSources;
    }
    function createSceneElement() {
        sceneElement = document.createElement('div');
        sceneElement.setAttribute('class', 'scene');
        zoomElement = document.createElement('div');
        zoomElement.setAttribute('class', 'zoom');
        cameraElement = document.createElement('div');
        cameraElement.setAttribute('class', 'camera');
        sceneElement.appendChild(zoomElement);
        zoomElement.appendChild(cameraElement);
    }
    function bindMouse() {
        sceneElement.addEventListener('mousedown', onMouseDown);
        sceneElement.addEventListener('mousewheel', onScroll);
        sceneElement.addEventListener('wheel', onScroll);
    }
    function onMouseDown(event) {
        mouse.start.x = event.x || event.clientX;
        mouse.start.y = event.y || event.clientY;
        mouse.current.x = event.x || event.clientX;
        mouse.current.y = event.y || event.clientY;
        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseup', onMouseUp);
    }
    function onMouseUp() {
        window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('mouseup', onMouseUp);
    }
    function onMouseMove(event) {
        mouse.lastMove.dx = (event.x || event.clientX) - mouse.current.x;
        mouse.lastMove.dy = (event.y || event.clientY) - mouse.current.y;
        mouse.current.x = event.x || event.clientX;
        mouse.current.y = event.y || event.clientY;
        if (canPan && mouse.shiftDown) {
            scenePan(mouse.lastMove.dx, mouse.lastMove.dy);
            updateSceneTransforms();
            self.triggerEvent('pan', {
                rotation: getRotation(),
                pan: getScenePan(),
                zoom: getSceneZoom(),
                target: self
            });
        } else if (canOrbit) {
            const rotations = 2;
            const ROTATION_SCALING_FACTOR = Math.PI * 2 * rotations;
            rotation.y += mouse.lastMove.dx / window.innerWidth * ROTATION_SCALING_FACTOR;
            rotation.x -= mouse.lastMove.dy / window.innerHeight * ROTATION_SCALING_FACTOR;
            updateSceneTransforms();
            self.triggerEvent('orbit', {
                rotation: getRotation(),
                pan: getScenePan(),
                zoom: getSceneZoom(),
                target: self
            });
        }
    }
    function onScroll(event) {
        if (!canZoom) {return;}
        const ZOOM_SCALING_FACTOR = 50;// larger --> slower zoom
        zoom += event.deltaY / ZOOM_SCALING_FACTOR;
        updateSceneTransforms();
        event.preventDefault();
        self.triggerEvent('zoom', {
            rotation: getRotation(),
            pan: getScenePan(),
            zoom: getSceneZoom(),
            target: self
        });
        return false;
    }
    function bindKeyboard() {
        window.addEventListener('keydown', onKeyDown);
        window.addEventListener('keyup', onKeyUp);
    }
    function onKeyDown(event) {
        mouse.shiftDown = (event.keyCode === SHIFT_KEYCODE || event.which === SHIFT_KEYCODE);
    }
    function onKeyUp(event) {
        mouse.shiftDown = !(event.keyCode === SHIFT_KEYCODE || event.which === SHIFT_KEYCODE);
    }
    function updateSceneTransforms() {
        cameraElement.style.transform = 'rotateX(' + rotation.x + 'rad) rotateY(' + rotation.y + 'rad) rotateZ(' + rotation.z + 'rad)';
        zoomElement.style.transform = 'scale(' + zoom + ', ' + zoom + ')';
        zoomElement.style.transform += ' translateX(' + pan.x + 'px) translateY(' + pan.y + 'px) translateZ(' + pan.z + 'px)';
        updateVoxelLighting();
    }
    function updateVoxelLighting() {
        if (lightSources.length === 0) {return;}
        for (var i = 0, voxel; voxel = voxels[i++];) {voxel.updateLightSource(lightSources);}
    }
    (function Constructor() {
        eventListener(self);
        createSceneElement();
        bindMouse();
        bindKeyboard();
    }).apply(self, arguments);
}