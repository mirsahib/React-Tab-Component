# React Tab Component

[![Netlify Status](https://api.netlify.com/api/v1/badges/1bab735c-40a2-47b7-bfbd-cd900f79d7e1/deploy-status)](https://app.netlify.com/sites/dazzling-jang-dcf2d2/deploys)

## Description

A simple implementation of Tab-Component for React project

## Instructions

First clone this repository.

```bash
$ git clone https://github.com/mirsahib/React-Tab-Component.git
```

Install dependencies. Make sure you already have [`nodejs`](https://nodejs.org/en/) & [`npm`](https://www.npmjs.com/) installed in your system.

```bash
$ yarn install
```

After successfull installation run

```bash
$ yarn run start
```

## Usage

Import React-Tab-Component in your react component.

```
import TabComponent from "../src/components/TabComponent";
```

You can pass the following array of object as props to React-Tab-Component

```
links={[
          { component: TabItem1, name: "TabItem1", path: "/" },
          { component: TabItem2, name: "TabItem2", path: "/tab2" },
          { component: TabItem3, name: "TabItem3", path: "/tab3" },
        ]
```

Note: You need to create `TabItem1,TabItem2,TabItem2` first before importing the React-Tab-Component
Example:

```
import TabItem1 from "./components/TabItem1";
import TabItem2 from "./components/TabItem2";
import TabItem3 from "./components/TabItem3";
```

## Props

| Name  | Type  | Mandatory | Description                                                                                           |
| ----- | ----- | --------- | ----------------------------------------------------------------------------------------------------- |
| links | Array | Yes       | An array of objects that will be used to pass TabItem **_Component_**,**_Name_** and **_Path_** route |
