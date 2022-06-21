import { makeAutoObservable } from "mobx";

export default class OrgStore{
  constructor() {
    this._categories = [
      {
        id: 1,
        name: 'НИИ',
      },
      {
        id: 2,
        name: 'Коммерческая организация',
      },
    ];
    this._regions = [
      {
        id: 1,
        name: 'Свердловская область',
      },
      {
        id: 2,
        name: 'Москва и МО',
      },
      {
        id: 3,
        name: 'Челябинская область',
      }
    ];
    this._leaders = [
      {
        id: 1,
        name: 'Злобин Сергей Евгеньевич',
      },
      {
        id: 2,
        name: 'Кочетов Роман Вячеславович',
      }
    ];
    this._orgs = [
      
    ]
    makeAutoObservable(this);
  }

  setCategories(categories) {
    this._categories = categories;
  }

  setRegions(regions) {
    this._regions = regions;
  }

  setLeaders(leaders) {
    this._leaders = leaders;
  }

  setOrganizations(orgs) {
    this._orgs = orgs;
  }


  get categories() {
    return this._categories;
  }

  get regions() {
    return this._regions
  }

  get leaders() {
    return this._leaders
  }

  get orgs() {
    return this._orgs
  }

}