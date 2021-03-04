import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Customer } from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomersortingService {

  numericProps = ['id', 'zip']
  stringProps = ['firstName', 'lastName', 'email', 'country', 'city', 'street']

  private static compareNumbers = function(a:number, b:number, direction:string = 'asc'){
    return direction === 'asc' ? a - b : b - a }

 private static compareStrings = function(a:string, b:string, direction:string = 'asc'):any {
    direction === 'asc' ? a.localeCompare(b) : b.localeCompare(a) }

 private static getPropValue = function(props: string[], obj: any): any {
      return props.reduce((accumulator, currentValue) => accumulator[currentValue], obj)
  }

  private static sortyObjectByPropNumbers<T>(arr: T[], direction: string, ...props: string[]): any {
    arr.sort((a: T, b: T) => CustomersortingService.compareNumbers(
      CustomersortingService.getPropValue(props, a),
      CustomersortingService.getPropValue(props, b), direction))
  }

  private static sortyObjectByPropStrings<T>(arr: T[], direction: string, ...props: string[]): any {
    arr.sort((a: T, b: T) => CustomersortingService.compareStrings(
      CustomersortingService.getPropValue(props, a),
      CustomersortingService.getPropValue(props, a), direction),)
  }

  public sortyObjectByProp<T>(arr: T[], direction: string, ...props: string[]): T[] {
    return typeof props[props.length - 1] === 'number'
        ? CustomersortingService.sortyObjectByPropNumbers<T>(arr, direction, ...props)
        : CustomersortingService.sortyObjectByPropStrings<T>(arr, direction, ...props)
}

//  private sortByEmbedProperty = function(arr:any[], prop:string, prop2:string, direction:string='asc') {
//     CustomersortingService.numericProps.includes(prop2)
//         ? arr.sort((a:number, b:number) => CustomersortingService.compareNumbers(a[prop][prop2], b[prop][prop2], direction))
//         : arr.sort((a:string, b:string) => CustomersortingService.compareStrings(a[prop][prop2], b[prop][prop2], direction))
//  }

//  private sortBySimpleProperty = function (arr:any[], prop:string, direction:string='asc') {
//     CustomersortingService.numericProps.includes(prop)
//         ? arr.sort((a:number, b:number) => CustomersortingService.compareNumbers(a[prop], b[prop], direction))
//         : arr.sort((a:string, b:string) => CustomersortingService.compareStrings(a[prop], b[prop], direction))}

//  public sortyObjectByProp = function (arr:any[], prop:string, prop2:string, direction:string = 'asc') {
//     prop2
//         ? CustomersortingService.sortByEmbedProperty(arr, prop, prop2, direction)
//         : CustomersortingService.sortBySimpleProperty(arr, prop, direction)}


  constructor(

  ) { }






}
