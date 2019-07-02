//-----------------------------------------------------------------------
// <copyright file="Routes.tsx" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Routing rules
//-----------------------------------------------------------------------

// Import komponent
import HomeComp from './pages/Home-Page';

export default [
    {
        path: "/",
        exact: true,
        component: (HomeComp)
    }
];