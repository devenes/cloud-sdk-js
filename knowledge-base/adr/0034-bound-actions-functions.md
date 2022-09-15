# Title

Supporting _bound_ *actions* and *functions* in OData client generator

## Status

proposed

## Context

In OData v4, *actions* and *functions* can be _bound_.
This means the action or function is associated to an entity, similar to a method in object orient programming is associated with an object.

In EDMX, binding is expressed via the [`isBound` property](https://docs.oasis-open.org/odata/odata-csdl-xml/v4.01/os/odata-csdl-xml-v4.01-os.html#_Toc37318905).
The property is optional, and if it is **absent** the action or function is **not bound**.

A bound action or function [has at least one parameter, the first parameter is always the associated entity](https://docs.oasis-open.org/odata/odata-csdl-xml/v4.01/os/odata-csdl-xml-v4.01-os.html#sec_Parametereter).
The name of the parameter is not relevant.

## Decision

We will implement bound actions and functions using xy API.

## Consequences

What becomes easier or more difficult to do because of this change?

# Appendix - API Options

The following API options had been considered for calling bound actions and functions.

## Option A - Object Oriented Style

```typescript
const myObject = new MyEntity({id: 42})

await myObject.boundActionWithoutParameter().execute(destination)
await myObject.boundActionWithParameter({param1: "foo", param2: "bar"}).execute(destination)

await myObject.boundFunctionWithoutParameter().execute(destination)
await myObject.boundFunctionWithParameter({param1: "foo", param2: "bar"}).execute(destination)
```

## Option B - Static Function Style

```typescript
await MyEntity.boundActionWithoutParameter().execute(destination)
await MyEntity.boundActionWithParameter({param1: "foo", param2: "bar"}).execute(destination)

await MyEntity.boundFunctionWithoutParameter().execute(destination)
await MyEntity.boundFunctionWithParameter({param1: "foo", param2: "bar"}).execute(destination)
```

## Option C - Unbound Style

This option is most similar to the existing API for using unbound actions and functions.
The only difference is that the binding parameter needs to be passed as an argument.

```typescript
const myObject = new MyEntity({id: 42})

await actionImports.boundActionWithoutParameter({myObject}).execute(destination)
await actionImports.boundActionWithParameter({myObject, param1: "foo", param2: "bar"}).execute(destination)

await functionImports.boundFunctionWithoutParameter({myObject}).execute(destination)
await functionImports.boundFunctionWithParameter({myObject, param1: "foo", param2: "bar"}).execute(destination)
```

This syntax is closes to the EDMX-XML representation by ODdata which would read like this:

```xml
<Action Name="boundActionWithParameter" IsBound="true">
    <Parameter Name="in" Type="XYService.MyEntity"/>
    <Parameter Name="param1" Type="Edm.String"/>
    <Parameter Name="param2" Type="Edm.String"/>
    <ReturnType Type="XYService.Result"/>
</Action>
```

## References

[How to build an OData Service with Olingo V4: Part 10: Bound Actions and Functions](https://olingo.apache.org/doc/odata4/tutorials/action/tutorial_bound_action.html)

[SAP Blogs: Cheat sheet for URI patterns for calling OData actions and functions](https://blogs.sap.com/2021/08/21/cheat-sheet-for-uri-patterns-for-calling-odata-actions-and-functions/)

[OData Common Schema Definition Language (CSDL) XML Representation Version 4.01](https://docs.oasis-open.org/odata/odata-csdl-xml/v4.01/os/odata-csdl-xml-v4.01-os.html)
