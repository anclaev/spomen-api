import { Prisma } from '@prisma/client'
export declare enum UploadScalarFieldEnum {
  id = 'id',
  name = 'name',
  ext = 'ext',
  url = 'url',
  permissions = 'permissions',
  ownerId = 'ownerId',
  eventId = 'eventId',
  createdAt = 'createdAt',
}
export declare enum ReviewScalarFieldEnum {
  id = 'id',
  text = 'text',
  permissions = 'permissions',
  authorId = 'authorId',
  eventId = 'eventId',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}
export declare enum TransactionIsolationLevel {
  ReadUncommitted = 'ReadUncommitted',
  ReadCommitted = 'ReadCommitted',
  RepeatableRead = 'RepeatableRead',
  Serializable = 'Serializable',
}
export declare enum SortOrder {
  asc = 'asc',
  desc = 'desc',
}
export declare enum Role {
  Public = 'Public',
  Lover = 'Lover',
  Admin = 'Admin',
}
export declare enum QueryMode {
  'default' = 'default',
  insensitive = 'insensitive',
}
export declare enum Permission {
  Public = 'Public',
  Lovers = 'Lovers',
  Owner = 'Owner',
}
export declare enum NullsOrder {
  first = 'first',
  last = 'last',
}
export declare enum Gender {
  Male = 'Male',
  Female = 'Female',
}
export declare enum OfferScalarFieldEnum {
  id = 'id',
  code = 'code',
  loveId = 'loveId',
  ownerId = 'ownerId',
  targetId = 'targetId',
  isUsed = 'isUsed',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}
export declare enum MessageScalarFieldEnum {
  id = 'id',
  text = 'text',
  authorId = 'authorId',
  chatId = 'chatId',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}
export declare enum LoveScalarFieldEnum {
  id = 'id',
  alias = 'alias',
  name = 'name',
  isPrivate = 'isPrivate',
  ownerId = 'ownerId',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}
export declare enum EventScalarFieldEnum {
  id = 'id',
  name = 'name',
  description = 'description',
  date = 'date',
  picId = 'picId',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}
export declare enum ChatScalarFieldEnum {
  id = 'id',
  title = 'title',
  ownerId = 'ownerId',
  picId = 'picId',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}
export declare enum AccountScalarFieldEnum {
  id = 'id',
  login = 'login',
  email = 'email',
  password = 'password',
  roles = 'roles',
  avatarId = 'avatarId',
  vkId = 'vkId',
  vkAvatar = 'vkAvatar',
  name = 'name',
  surname = 'surname',
  gender = 'gender',
  birthday = 'birthday',
  loveId = 'loveId',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}
export declare class AccountAggregateArgs {
  where?: InstanceType<typeof AccountWhereInput>
  orderBy?: Array<AccountOrderByWithRelationInput>
  cursor?: Prisma.AtLeast<
    AccountWhereUniqueInput,
    'id' | 'login' | 'email' | 'vkId'
  >
  take?: number
  skip?: number
  _count?: InstanceType<typeof AccountCountAggregateInput>
  _min?: InstanceType<typeof AccountMinAggregateInput>
  _max?: InstanceType<typeof AccountMaxAggregateInput>
}
export declare class AccountCountAggregateInput {
  id?: true
  login?: true
  email?: true
  password?: true
  roles?: true
  avatarId?: true
  vkId?: true
  vkAvatar?: true
  name?: true
  surname?: true
  gender?: true
  birthday?: true
  loveId?: true
  createdAt?: true
  updatedAt?: true
  _all?: true
}
export declare class AccountCountAggregate {
  id: number
  login: number
  email: number
  password: number
  roles: number
  avatarId: number
  vkId: number
  vkAvatar: number
  name: number
  surname: number
  gender: number
  birthday: number
  loveId: number
  createdAt: number
  updatedAt: number
  _all: number
}
export declare class AccountCountOrderByAggregateInput {
  id?: keyof typeof SortOrder
  login?: keyof typeof SortOrder
  email?: keyof typeof SortOrder
  password?: keyof typeof SortOrder
  roles?: keyof typeof SortOrder
  avatarId?: keyof typeof SortOrder
  vkId?: keyof typeof SortOrder
  vkAvatar?: keyof typeof SortOrder
  name?: keyof typeof SortOrder
  surname?: keyof typeof SortOrder
  gender?: keyof typeof SortOrder
  birthday?: keyof typeof SortOrder
  loveId?: keyof typeof SortOrder
  createdAt?: keyof typeof SortOrder
  updatedAt?: keyof typeof SortOrder
}
export declare class AccountCount {
  uploads?: number
  chats?: number
  ownedMessages?: number
  ownedReviews?: number
  ownedLoves?: number
  ownedOffers?: number
  ownedChats?: number
}
export declare class AccountCreateManyAvatarInputEnvelope {
  data: Array<AccountCreateManyAvatarInput>
  skipDuplicates?: boolean
}
export declare class AccountCreateManyAvatarInput {
  id?: string
  login: string
  email?: string
  password: string
  roles?: InstanceType<typeof AccountCreaterolesInput>
  vkId?: string
  vkAvatar?: string
  name?: string
  surname?: string
  gender?: keyof typeof Gender
  birthday?: Date | string
  loveId?: string
  createdAt?: Date | string
  updatedAt?: Date | string
}
export declare class AccountCreateManyLoveInputEnvelope {
  data: Array<AccountCreateManyLoveInput>
  skipDuplicates?: boolean
}
export declare class AccountCreateManyLoveInput {
  id?: string
  login: string
  email?: string
  password: string
  roles?: InstanceType<typeof AccountCreaterolesInput>
  avatarId?: string
  vkId?: string
  vkAvatar?: string
  name?: string
  surname?: string
  gender?: keyof typeof Gender
  birthday?: Date | string
  createdAt?: Date | string
  updatedAt?: Date | string
}
export declare class AccountCreateManyInput {
  id?: string
  login: string
  email?: string
  password: string
  roles?: InstanceType<typeof AccountCreaterolesInput>
  avatarId?: string
  vkId?: string
  vkAvatar?: string
  name?: string
  surname?: string
  gender?: keyof typeof Gender
  birthday?: Date | string
  loveId?: string
  createdAt?: Date | string
  updatedAt?: Date | string
}
export declare class AccountCreateNestedManyWithoutAvatarInput {
  create?: Array<AccountCreateWithoutAvatarInput>
  connectOrCreate?: Array<AccountCreateOrConnectWithoutAvatarInput>
  createMany?: InstanceType<typeof AccountCreateManyAvatarInputEnvelope>
  connect?: Array<
    Prisma.AtLeast<AccountWhereUniqueInput, 'id' | 'login' | 'email' | 'vkId'>
  >
}
export declare class AccountCreateNestedManyWithoutChatsInput {
  create?: Array<AccountCreateWithoutChatsInput>
  connectOrCreate?: Array<AccountCreateOrConnectWithoutChatsInput>
  connect?: Array<
    Prisma.AtLeast<AccountWhereUniqueInput, 'id' | 'login' | 'email' | 'vkId'>
  >
}
export declare class AccountCreateNestedManyWithoutLoveInput {
  create?: Array<AccountCreateWithoutLoveInput>
  connectOrCreate?: Array<AccountCreateOrConnectWithoutLoveInput>
  createMany?: InstanceType<typeof AccountCreateManyLoveInputEnvelope>
  connect?: Array<
    Prisma.AtLeast<AccountWhereUniqueInput, 'id' | 'login' | 'email' | 'vkId'>
  >
}
export declare class AccountCreateNestedOneWithoutOfferInput {
  create?: InstanceType<typeof AccountCreateWithoutOfferInput>
  connectOrCreate?: InstanceType<typeof AccountCreateOrConnectWithoutOfferInput>
  connect?: Prisma.AtLeast<
    AccountWhereUniqueInput,
    'id' | 'login' | 'email' | 'vkId'
  >
}
export declare class AccountCreateNestedOneWithoutOwnedChatsInput {
  create?: InstanceType<typeof AccountCreateWithoutOwnedChatsInput>
  connectOrCreate?: InstanceType<
    typeof AccountCreateOrConnectWithoutOwnedChatsInput
  >
  connect?: Prisma.AtLeast<
    AccountWhereUniqueInput,
    'id' | 'login' | 'email' | 'vkId'
  >
}
export declare class AccountCreateNestedOneWithoutOwnedLovesInput {
  create?: InstanceType<typeof AccountCreateWithoutOwnedLovesInput>
  connectOrCreate?: InstanceType<
    typeof AccountCreateOrConnectWithoutOwnedLovesInput
  >
  connect?: Prisma.AtLeast<
    AccountWhereUniqueInput,
    'id' | 'login' | 'email' | 'vkId'
  >
}
export declare class AccountCreateNestedOneWithoutOwnedMessagesInput {
  create?: InstanceType<typeof AccountCreateWithoutOwnedMessagesInput>
  connectOrCreate?: InstanceType<
    typeof AccountCreateOrConnectWithoutOwnedMessagesInput
  >
  connect?: Prisma.AtLeast<
    AccountWhereUniqueInput,
    'id' | 'login' | 'email' | 'vkId'
  >
}
export declare class AccountCreateNestedOneWithoutOwnedOffersInput {
  create?: InstanceType<typeof AccountCreateWithoutOwnedOffersInput>
  connectOrCreate?: InstanceType<
    typeof AccountCreateOrConnectWithoutOwnedOffersInput
  >
  connect?: Prisma.AtLeast<
    AccountWhereUniqueInput,
    'id' | 'login' | 'email' | 'vkId'
  >
}
export declare class AccountCreateNestedOneWithoutOwnedReviewsInput {
  create?: InstanceType<typeof AccountCreateWithoutOwnedReviewsInput>
  connectOrCreate?: InstanceType<
    typeof AccountCreateOrConnectWithoutOwnedReviewsInput
  >
  connect?: Prisma.AtLeast<
    AccountWhereUniqueInput,
    'id' | 'login' | 'email' | 'vkId'
  >
}
export declare class AccountCreateNestedOneWithoutUploadsInput {
  create?: InstanceType<typeof AccountCreateWithoutUploadsInput>
  connectOrCreate?: InstanceType<
    typeof AccountCreateOrConnectWithoutUploadsInput
  >
  connect?: Prisma.AtLeast<
    AccountWhereUniqueInput,
    'id' | 'login' | 'email' | 'vkId'
  >
}
export declare class AccountCreateOrConnectWithoutAvatarInput {
  where: Prisma.AtLeast<
    AccountWhereUniqueInput,
    'id' | 'login' | 'email' | 'vkId'
  >
  create: InstanceType<typeof AccountCreateWithoutAvatarInput>
}
export declare class AccountCreateOrConnectWithoutChatsInput {
  where: Prisma.AtLeast<
    AccountWhereUniqueInput,
    'id' | 'login' | 'email' | 'vkId'
  >
  create: InstanceType<typeof AccountCreateWithoutChatsInput>
}
export declare class AccountCreateOrConnectWithoutLoveInput {
  where: Prisma.AtLeast<
    AccountWhereUniqueInput,
    'id' | 'login' | 'email' | 'vkId'
  >
  create: InstanceType<typeof AccountCreateWithoutLoveInput>
}
export declare class AccountCreateOrConnectWithoutOfferInput {
  where: Prisma.AtLeast<
    AccountWhereUniqueInput,
    'id' | 'login' | 'email' | 'vkId'
  >
  create: InstanceType<typeof AccountCreateWithoutOfferInput>
}
export declare class AccountCreateOrConnectWithoutOwnedChatsInput {
  where: Prisma.AtLeast<
    AccountWhereUniqueInput,
    'id' | 'login' | 'email' | 'vkId'
  >
  create: InstanceType<typeof AccountCreateWithoutOwnedChatsInput>
}
export declare class AccountCreateOrConnectWithoutOwnedLovesInput {
  where: Prisma.AtLeast<
    AccountWhereUniqueInput,
    'id' | 'login' | 'email' | 'vkId'
  >
  create: InstanceType<typeof AccountCreateWithoutOwnedLovesInput>
}
export declare class AccountCreateOrConnectWithoutOwnedMessagesInput {
  where: Prisma.AtLeast<
    AccountWhereUniqueInput,
    'id' | 'login' | 'email' | 'vkId'
  >
  create: InstanceType<typeof AccountCreateWithoutOwnedMessagesInput>
}
export declare class AccountCreateOrConnectWithoutOwnedOffersInput {
  where: Prisma.AtLeast<
    AccountWhereUniqueInput,
    'id' | 'login' | 'email' | 'vkId'
  >
  create: InstanceType<typeof AccountCreateWithoutOwnedOffersInput>
}
export declare class AccountCreateOrConnectWithoutOwnedReviewsInput {
  where: Prisma.AtLeast<
    AccountWhereUniqueInput,
    'id' | 'login' | 'email' | 'vkId'
  >
  create: InstanceType<typeof AccountCreateWithoutOwnedReviewsInput>
}
export declare class AccountCreateOrConnectWithoutUploadsInput {
  where: Prisma.AtLeast<
    AccountWhereUniqueInput,
    'id' | 'login' | 'email' | 'vkId'
  >
  create: InstanceType<typeof AccountCreateWithoutUploadsInput>
}
export declare class AccountCreateWithoutAvatarInput {
  id?: string
  login: string
  email?: string
  password: string
  roles?: InstanceType<typeof AccountCreaterolesInput>
  vkId?: string
  vkAvatar?: string
  name?: string
  surname?: string
  gender?: keyof typeof Gender
  birthday?: Date | string
  createdAt?: Date | string
  updatedAt?: Date | string
  uploads?: InstanceType<typeof UploadCreateNestedManyWithoutOwnerInput>
  chats?: InstanceType<typeof ChatCreateNestedManyWithoutMembersInput>
  offer?: InstanceType<typeof OfferCreateNestedOneWithoutTargetInput>
  love?: InstanceType<typeof LoveCreateNestedOneWithoutPartnersInput>
  ownedMessages?: InstanceType<typeof MessageCreateNestedManyWithoutAuthorInput>
  ownedReviews?: InstanceType<typeof ReviewCreateNestedManyWithoutAuthorInput>
  ownedLoves?: InstanceType<typeof LoveCreateNestedManyWithoutOwnerInput>
  ownedOffers?: InstanceType<typeof OfferCreateNestedManyWithoutOwnerInput>
  ownedChats?: InstanceType<typeof ChatCreateNestedManyWithoutOwnerInput>
}
export declare class AccountCreateWithoutChatsInput {
  id?: string
  login: string
  email?: string
  password: string
  roles?: InstanceType<typeof AccountCreaterolesInput>
  vkId?: string
  vkAvatar?: string
  name?: string
  surname?: string
  gender?: keyof typeof Gender
  birthday?: Date | string
  createdAt?: Date | string
  updatedAt?: Date | string
  avatar?: InstanceType<typeof UploadCreateNestedOneWithoutAccountsInput>
  uploads?: InstanceType<typeof UploadCreateNestedManyWithoutOwnerInput>
  offer?: InstanceType<typeof OfferCreateNestedOneWithoutTargetInput>
  love?: InstanceType<typeof LoveCreateNestedOneWithoutPartnersInput>
  ownedMessages?: InstanceType<typeof MessageCreateNestedManyWithoutAuthorInput>
  ownedReviews?: InstanceType<typeof ReviewCreateNestedManyWithoutAuthorInput>
  ownedLoves?: InstanceType<typeof LoveCreateNestedManyWithoutOwnerInput>
  ownedOffers?: InstanceType<typeof OfferCreateNestedManyWithoutOwnerInput>
  ownedChats?: InstanceType<typeof ChatCreateNestedManyWithoutOwnerInput>
}
export declare class AccountCreateWithoutLoveInput {
  id?: string
  login: string
  email?: string
  password: string
  roles?: InstanceType<typeof AccountCreaterolesInput>
  vkId?: string
  vkAvatar?: string
  name?: string
  surname?: string
  gender?: keyof typeof Gender
  birthday?: Date | string
  createdAt?: Date | string
  updatedAt?: Date | string
  avatar?: InstanceType<typeof UploadCreateNestedOneWithoutAccountsInput>
  uploads?: InstanceType<typeof UploadCreateNestedManyWithoutOwnerInput>
  chats?: InstanceType<typeof ChatCreateNestedManyWithoutMembersInput>
  offer?: InstanceType<typeof OfferCreateNestedOneWithoutTargetInput>
  ownedMessages?: InstanceType<typeof MessageCreateNestedManyWithoutAuthorInput>
  ownedReviews?: InstanceType<typeof ReviewCreateNestedManyWithoutAuthorInput>
  ownedLoves?: InstanceType<typeof LoveCreateNestedManyWithoutOwnerInput>
  ownedOffers?: InstanceType<typeof OfferCreateNestedManyWithoutOwnerInput>
  ownedChats?: InstanceType<typeof ChatCreateNestedManyWithoutOwnerInput>
}
export declare class AccountCreateWithoutOfferInput {
  id?: string
  login: string
  email?: string
  password: string
  roles?: InstanceType<typeof AccountCreaterolesInput>
  vkId?: string
  vkAvatar?: string
  name?: string
  surname?: string
  gender?: keyof typeof Gender
  birthday?: Date | string
  createdAt?: Date | string
  updatedAt?: Date | string
  avatar?: InstanceType<typeof UploadCreateNestedOneWithoutAccountsInput>
  uploads?: InstanceType<typeof UploadCreateNestedManyWithoutOwnerInput>
  chats?: InstanceType<typeof ChatCreateNestedManyWithoutMembersInput>
  love?: InstanceType<typeof LoveCreateNestedOneWithoutPartnersInput>
  ownedMessages?: InstanceType<typeof MessageCreateNestedManyWithoutAuthorInput>
  ownedReviews?: InstanceType<typeof ReviewCreateNestedManyWithoutAuthorInput>
  ownedLoves?: InstanceType<typeof LoveCreateNestedManyWithoutOwnerInput>
  ownedOffers?: InstanceType<typeof OfferCreateNestedManyWithoutOwnerInput>
  ownedChats?: InstanceType<typeof ChatCreateNestedManyWithoutOwnerInput>
}
export declare class AccountCreateWithoutOwnedChatsInput {
  id?: string
  login: string
  email?: string
  password: string
  roles?: InstanceType<typeof AccountCreaterolesInput>
  vkId?: string
  vkAvatar?: string
  name?: string
  surname?: string
  gender?: keyof typeof Gender
  birthday?: Date | string
  createdAt?: Date | string
  updatedAt?: Date | string
  avatar?: InstanceType<typeof UploadCreateNestedOneWithoutAccountsInput>
  uploads?: InstanceType<typeof UploadCreateNestedManyWithoutOwnerInput>
  chats?: InstanceType<typeof ChatCreateNestedManyWithoutMembersInput>
  offer?: InstanceType<typeof OfferCreateNestedOneWithoutTargetInput>
  love?: InstanceType<typeof LoveCreateNestedOneWithoutPartnersInput>
  ownedMessages?: InstanceType<typeof MessageCreateNestedManyWithoutAuthorInput>
  ownedReviews?: InstanceType<typeof ReviewCreateNestedManyWithoutAuthorInput>
  ownedLoves?: InstanceType<typeof LoveCreateNestedManyWithoutOwnerInput>
  ownedOffers?: InstanceType<typeof OfferCreateNestedManyWithoutOwnerInput>
}
export declare class AccountCreateWithoutOwnedLovesInput {
  id?: string
  login: string
  email?: string
  password: string
  roles?: InstanceType<typeof AccountCreaterolesInput>
  vkId?: string
  vkAvatar?: string
  name?: string
  surname?: string
  gender?: keyof typeof Gender
  birthday?: Date | string
  createdAt?: Date | string
  updatedAt?: Date | string
  avatar?: InstanceType<typeof UploadCreateNestedOneWithoutAccountsInput>
  uploads?: InstanceType<typeof UploadCreateNestedManyWithoutOwnerInput>
  chats?: InstanceType<typeof ChatCreateNestedManyWithoutMembersInput>
  offer?: InstanceType<typeof OfferCreateNestedOneWithoutTargetInput>
  love?: InstanceType<typeof LoveCreateNestedOneWithoutPartnersInput>
  ownedMessages?: InstanceType<typeof MessageCreateNestedManyWithoutAuthorInput>
  ownedReviews?: InstanceType<typeof ReviewCreateNestedManyWithoutAuthorInput>
  ownedOffers?: InstanceType<typeof OfferCreateNestedManyWithoutOwnerInput>
  ownedChats?: InstanceType<typeof ChatCreateNestedManyWithoutOwnerInput>
}
export declare class AccountCreateWithoutOwnedMessagesInput {
  id?: string
  login: string
  email?: string
  password: string
  roles?: InstanceType<typeof AccountCreaterolesInput>
  vkId?: string
  vkAvatar?: string
  name?: string
  surname?: string
  gender?: keyof typeof Gender
  birthday?: Date | string
  createdAt?: Date | string
  updatedAt?: Date | string
  avatar?: InstanceType<typeof UploadCreateNestedOneWithoutAccountsInput>
  uploads?: InstanceType<typeof UploadCreateNestedManyWithoutOwnerInput>
  chats?: InstanceType<typeof ChatCreateNestedManyWithoutMembersInput>
  offer?: InstanceType<typeof OfferCreateNestedOneWithoutTargetInput>
  love?: InstanceType<typeof LoveCreateNestedOneWithoutPartnersInput>
  ownedReviews?: InstanceType<typeof ReviewCreateNestedManyWithoutAuthorInput>
  ownedLoves?: InstanceType<typeof LoveCreateNestedManyWithoutOwnerInput>
  ownedOffers?: InstanceType<typeof OfferCreateNestedManyWithoutOwnerInput>
  ownedChats?: InstanceType<typeof ChatCreateNestedManyWithoutOwnerInput>
}
export declare class AccountCreateWithoutOwnedOffersInput {
  id?: string
  login: string
  email?: string
  password: string
  roles?: InstanceType<typeof AccountCreaterolesInput>
  vkId?: string
  vkAvatar?: string
  name?: string
  surname?: string
  gender?: keyof typeof Gender
  birthday?: Date | string
  createdAt?: Date | string
  updatedAt?: Date | string
  avatar?: InstanceType<typeof UploadCreateNestedOneWithoutAccountsInput>
  uploads?: InstanceType<typeof UploadCreateNestedManyWithoutOwnerInput>
  chats?: InstanceType<typeof ChatCreateNestedManyWithoutMembersInput>
  offer?: InstanceType<typeof OfferCreateNestedOneWithoutTargetInput>
  love?: InstanceType<typeof LoveCreateNestedOneWithoutPartnersInput>
  ownedMessages?: InstanceType<typeof MessageCreateNestedManyWithoutAuthorInput>
  ownedReviews?: InstanceType<typeof ReviewCreateNestedManyWithoutAuthorInput>
  ownedLoves?: InstanceType<typeof LoveCreateNestedManyWithoutOwnerInput>
  ownedChats?: InstanceType<typeof ChatCreateNestedManyWithoutOwnerInput>
}
export declare class AccountCreateWithoutOwnedReviewsInput {
  id?: string
  login: string
  email?: string
  password: string
  roles?: InstanceType<typeof AccountCreaterolesInput>
  vkId?: string
  vkAvatar?: string
  name?: string
  surname?: string
  gender?: keyof typeof Gender
  birthday?: Date | string
  createdAt?: Date | string
  updatedAt?: Date | string
  avatar?: InstanceType<typeof UploadCreateNestedOneWithoutAccountsInput>
  uploads?: InstanceType<typeof UploadCreateNestedManyWithoutOwnerInput>
  chats?: InstanceType<typeof ChatCreateNestedManyWithoutMembersInput>
  offer?: InstanceType<typeof OfferCreateNestedOneWithoutTargetInput>
  love?: InstanceType<typeof LoveCreateNestedOneWithoutPartnersInput>
  ownedMessages?: InstanceType<typeof MessageCreateNestedManyWithoutAuthorInput>
  ownedLoves?: InstanceType<typeof LoveCreateNestedManyWithoutOwnerInput>
  ownedOffers?: InstanceType<typeof OfferCreateNestedManyWithoutOwnerInput>
  ownedChats?: InstanceType<typeof ChatCreateNestedManyWithoutOwnerInput>
}
export declare class AccountCreateWithoutUploadsInput {
  id?: string
  login: string
  email?: string
  password: string
  roles?: InstanceType<typeof AccountCreaterolesInput>
  vkId?: string
  vkAvatar?: string
  name?: string
  surname?: string
  gender?: keyof typeof Gender
  birthday?: Date | string
  createdAt?: Date | string
  updatedAt?: Date | string
  avatar?: InstanceType<typeof UploadCreateNestedOneWithoutAccountsInput>
  chats?: InstanceType<typeof ChatCreateNestedManyWithoutMembersInput>
  offer?: InstanceType<typeof OfferCreateNestedOneWithoutTargetInput>
  love?: InstanceType<typeof LoveCreateNestedOneWithoutPartnersInput>
  ownedMessages?: InstanceType<typeof MessageCreateNestedManyWithoutAuthorInput>
  ownedReviews?: InstanceType<typeof ReviewCreateNestedManyWithoutAuthorInput>
  ownedLoves?: InstanceType<typeof LoveCreateNestedManyWithoutOwnerInput>
  ownedOffers?: InstanceType<typeof OfferCreateNestedManyWithoutOwnerInput>
  ownedChats?: InstanceType<typeof ChatCreateNestedManyWithoutOwnerInput>
}
export declare class AccountCreateInput {
  id?: string
  login: string
  email?: string
  password: string
  roles?: InstanceType<typeof AccountCreaterolesInput>
  vkId?: string
  vkAvatar?: string
  name?: string
  surname?: string
  gender?: keyof typeof Gender
  birthday?: Date | string
  createdAt?: Date | string
  updatedAt?: Date | string
  avatar?: InstanceType<typeof UploadCreateNestedOneWithoutAccountsInput>
  uploads?: InstanceType<typeof UploadCreateNestedManyWithoutOwnerInput>
  chats?: InstanceType<typeof ChatCreateNestedManyWithoutMembersInput>
  offer?: InstanceType<typeof OfferCreateNestedOneWithoutTargetInput>
  love?: InstanceType<typeof LoveCreateNestedOneWithoutPartnersInput>
  ownedMessages?: InstanceType<typeof MessageCreateNestedManyWithoutAuthorInput>
  ownedReviews?: InstanceType<typeof ReviewCreateNestedManyWithoutAuthorInput>
  ownedLoves?: InstanceType<typeof LoveCreateNestedManyWithoutOwnerInput>
  ownedOffers?: InstanceType<typeof OfferCreateNestedManyWithoutOwnerInput>
  ownedChats?: InstanceType<typeof ChatCreateNestedManyWithoutOwnerInput>
}
export declare class AccountCreaterolesInput {
  set: Array<keyof typeof Role>
}
export declare class AccountGroupByArgs {
  where?: InstanceType<typeof AccountWhereInput>
  orderBy?: Array<AccountOrderByWithAggregationInput>
  by: Array<keyof typeof AccountScalarFieldEnum>
  having?: InstanceType<typeof AccountScalarWhereWithAggregatesInput>
  take?: number
  skip?: number
  _count?: InstanceType<typeof AccountCountAggregateInput>
  _min?: InstanceType<typeof AccountMinAggregateInput>
  _max?: InstanceType<typeof AccountMaxAggregateInput>
}
export declare class AccountGroupBy {
  id: string
  login: string
  email?: string
  password: string
  roles?: Array<keyof typeof Role>
  avatarId?: string
  vkId?: string
  vkAvatar?: string
  name?: string
  surname?: string
  gender?: keyof typeof Gender
  birthday?: Date | string
  loveId?: string
  createdAt: Date | string
  updatedAt: Date | string
  _count?: InstanceType<typeof AccountCountAggregate>
  _min?: InstanceType<typeof AccountMinAggregate>
  _max?: InstanceType<typeof AccountMaxAggregate>
}
export declare class AccountListRelationFilter {
  every?: InstanceType<typeof AccountWhereInput>
  some?: InstanceType<typeof AccountWhereInput>
  none?: InstanceType<typeof AccountWhereInput>
}
export declare class AccountMaxAggregateInput {
  id?: true
  login?: true
  email?: true
  password?: true
  avatarId?: true
  vkId?: true
  vkAvatar?: true
  name?: true
  surname?: true
  gender?: true
  birthday?: true
  loveId?: true
  createdAt?: true
  updatedAt?: true
}
export declare class AccountMaxAggregate {
  id?: string
  login?: string
  email?: string
  password?: string
  avatarId?: string
  vkId?: string
  vkAvatar?: string
  name?: string
  surname?: string
  gender?: keyof typeof Gender
  birthday?: Date | string
  loveId?: string
  createdAt?: Date | string
  updatedAt?: Date | string
}
export declare class AccountMaxOrderByAggregateInput {
  id?: keyof typeof SortOrder
  login?: keyof typeof SortOrder
  email?: keyof typeof SortOrder
  password?: keyof typeof SortOrder
  avatarId?: keyof typeof SortOrder
  vkId?: keyof typeof SortOrder
  vkAvatar?: keyof typeof SortOrder
  name?: keyof typeof SortOrder
  surname?: keyof typeof SortOrder
  gender?: keyof typeof SortOrder
  birthday?: keyof typeof SortOrder
  loveId?: keyof typeof SortOrder
  createdAt?: keyof typeof SortOrder
  updatedAt?: keyof typeof SortOrder
}
export declare class AccountMinAggregateInput {
  id?: true
  login?: true
  email?: true
  password?: true
  avatarId?: true
  vkId?: true
  vkAvatar?: true
  name?: true
  surname?: true
  gender?: true
  birthday?: true
  loveId?: true
  createdAt?: true
  updatedAt?: true
}
export declare class AccountMinAggregate {
  id?: string
  login?: string
  email?: string
  password?: string
  avatarId?: string
  vkId?: string
  vkAvatar?: string
  name?: string
  surname?: string
  gender?: keyof typeof Gender
  birthday?: Date | string
  loveId?: string
  createdAt?: Date | string
  updatedAt?: Date | string
}
export declare class AccountMinOrderByAggregateInput {
  id?: keyof typeof SortOrder
  login?: keyof typeof SortOrder
  email?: keyof typeof SortOrder
  password?: keyof typeof SortOrder
  avatarId?: keyof typeof SortOrder
  vkId?: keyof typeof SortOrder
  vkAvatar?: keyof typeof SortOrder
  name?: keyof typeof SortOrder
  surname?: keyof typeof SortOrder
  gender?: keyof typeof SortOrder
  birthday?: keyof typeof SortOrder
  loveId?: keyof typeof SortOrder
  createdAt?: keyof typeof SortOrder
  updatedAt?: keyof typeof SortOrder
}
export declare class AccountOrderByRelationAggregateInput {
  _count?: keyof typeof SortOrder
}
export declare class AccountOrderByWithAggregationInput {
  id?: keyof typeof SortOrder
  login?: keyof typeof SortOrder
  email?: InstanceType<typeof SortOrderInput>
  password?: keyof typeof SortOrder
  roles?: keyof typeof SortOrder
  avatarId?: InstanceType<typeof SortOrderInput>
  vkId?: InstanceType<typeof SortOrderInput>
  vkAvatar?: InstanceType<typeof SortOrderInput>
  name?: InstanceType<typeof SortOrderInput>
  surname?: InstanceType<typeof SortOrderInput>
  gender?: InstanceType<typeof SortOrderInput>
  birthday?: InstanceType<typeof SortOrderInput>
  loveId?: InstanceType<typeof SortOrderInput>
  createdAt?: keyof typeof SortOrder
  updatedAt?: keyof typeof SortOrder
  _count?: InstanceType<typeof AccountCountOrderByAggregateInput>
  _max?: InstanceType<typeof AccountMaxOrderByAggregateInput>
  _min?: InstanceType<typeof AccountMinOrderByAggregateInput>
}
export declare class AccountOrderByWithRelationInput {
  id?: keyof typeof SortOrder
  login?: keyof typeof SortOrder
  email?: InstanceType<typeof SortOrderInput>
  password?: keyof typeof SortOrder
  roles?: keyof typeof SortOrder
  avatarId?: InstanceType<typeof SortOrderInput>
  vkId?: InstanceType<typeof SortOrderInput>
  vkAvatar?: InstanceType<typeof SortOrderInput>
  name?: InstanceType<typeof SortOrderInput>
  surname?: InstanceType<typeof SortOrderInput>
  gender?: InstanceType<typeof SortOrderInput>
  birthday?: InstanceType<typeof SortOrderInput>
  loveId?: InstanceType<typeof SortOrderInput>
  createdAt?: keyof typeof SortOrder
  updatedAt?: keyof typeof SortOrder
  avatar?: InstanceType<typeof UploadOrderByWithRelationInput>
  uploads?: InstanceType<typeof UploadOrderByRelationAggregateInput>
  chats?: InstanceType<typeof ChatOrderByRelationAggregateInput>
  offer?: InstanceType<typeof OfferOrderByWithRelationInput>
  love?: InstanceType<typeof LoveOrderByWithRelationInput>
  ownedMessages?: InstanceType<typeof MessageOrderByRelationAggregateInput>
  ownedReviews?: InstanceType<typeof ReviewOrderByRelationAggregateInput>
  ownedLoves?: InstanceType<typeof LoveOrderByRelationAggregateInput>
  ownedOffers?: InstanceType<typeof OfferOrderByRelationAggregateInput>
  ownedChats?: InstanceType<typeof ChatOrderByRelationAggregateInput>
}
export declare class AccountRelationFilter {
  is?: InstanceType<typeof AccountWhereInput>
  isNot?: InstanceType<typeof AccountWhereInput>
}
export declare class AccountScalarWhereWithAggregatesInput {
  AND?: Array<AccountScalarWhereWithAggregatesInput>
  OR?: Array<AccountScalarWhereWithAggregatesInput>
  NOT?: Array<AccountScalarWhereWithAggregatesInput>
  id?: InstanceType<typeof StringWithAggregatesFilter>
  login?: InstanceType<typeof StringWithAggregatesFilter>
  email?: InstanceType<typeof StringNullableWithAggregatesFilter>
  password?: InstanceType<typeof StringWithAggregatesFilter>
  roles?: InstanceType<typeof EnumRoleNullableListFilter>
  avatarId?: InstanceType<typeof StringNullableWithAggregatesFilter>
  vkId?: InstanceType<typeof StringNullableWithAggregatesFilter>
  vkAvatar?: InstanceType<typeof StringNullableWithAggregatesFilter>
  name?: InstanceType<typeof StringNullableWithAggregatesFilter>
  surname?: InstanceType<typeof StringNullableWithAggregatesFilter>
  gender?: InstanceType<typeof EnumGenderNullableWithAggregatesFilter>
  birthday?: InstanceType<typeof DateTimeNullableWithAggregatesFilter>
  loveId?: InstanceType<typeof StringNullableWithAggregatesFilter>
  createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>
  updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>
}
export declare class AccountScalarWhereInput {
  AND?: Array<AccountScalarWhereInput>
  OR?: Array<AccountScalarWhereInput>
  NOT?: Array<AccountScalarWhereInput>
  id?: InstanceType<typeof StringFilter>
  login?: InstanceType<typeof StringFilter>
  email?: InstanceType<typeof StringNullableFilter>
  password?: InstanceType<typeof StringFilter>
  roles?: InstanceType<typeof EnumRoleNullableListFilter>
  avatarId?: InstanceType<typeof StringNullableFilter>
  vkId?: InstanceType<typeof StringNullableFilter>
  vkAvatar?: InstanceType<typeof StringNullableFilter>
  name?: InstanceType<typeof StringNullableFilter>
  surname?: InstanceType<typeof StringNullableFilter>
  gender?: InstanceType<typeof EnumGenderNullableFilter>
  birthday?: InstanceType<typeof DateTimeNullableFilter>
  loveId?: InstanceType<typeof StringNullableFilter>
  createdAt?: InstanceType<typeof DateTimeFilter>
  updatedAt?: InstanceType<typeof DateTimeFilter>
}
export declare class AccountUncheckedCreateNestedManyWithoutAvatarInput {
  create?: Array<AccountCreateWithoutAvatarInput>
  connectOrCreate?: Array<AccountCreateOrConnectWithoutAvatarInput>
  createMany?: InstanceType<typeof AccountCreateManyAvatarInputEnvelope>
  connect?: Array<
    Prisma.AtLeast<AccountWhereUniqueInput, 'id' | 'login' | 'email' | 'vkId'>
  >
}
export declare class AccountUncheckedCreateNestedManyWithoutChatsInput {
  create?: Array<AccountCreateWithoutChatsInput>
  connectOrCreate?: Array<AccountCreateOrConnectWithoutChatsInput>
  connect?: Array<
    Prisma.AtLeast<AccountWhereUniqueInput, 'id' | 'login' | 'email' | 'vkId'>
  >
}
export declare class AccountUncheckedCreateNestedManyWithoutLoveInput {
  create?: Array<AccountCreateWithoutLoveInput>
  connectOrCreate?: Array<AccountCreateOrConnectWithoutLoveInput>
  createMany?: InstanceType<typeof AccountCreateManyLoveInputEnvelope>
  connect?: Array<
    Prisma.AtLeast<AccountWhereUniqueInput, 'id' | 'login' | 'email' | 'vkId'>
  >
}
export declare class AccountUncheckedCreateWithoutAvatarInput {
  id?: string
  login: string
  email?: string
  password: string
  roles?: InstanceType<typeof AccountCreaterolesInput>
  vkId?: string
  vkAvatar?: string
  name?: string
  surname?: string
  gender?: keyof typeof Gender
  birthday?: Date | string
  loveId?: string
  createdAt?: Date | string
  updatedAt?: Date | string
  uploads?: InstanceType<
    typeof UploadUncheckedCreateNestedManyWithoutOwnerInput
  >
  chats?: InstanceType<typeof ChatUncheckedCreateNestedManyWithoutMembersInput>
  offer?: InstanceType<typeof OfferUncheckedCreateNestedOneWithoutTargetInput>
  ownedMessages?: InstanceType<
    typeof MessageUncheckedCreateNestedManyWithoutAuthorInput
  >
  ownedReviews?: InstanceType<
    typeof ReviewUncheckedCreateNestedManyWithoutAuthorInput
  >
  ownedLoves?: InstanceType<
    typeof LoveUncheckedCreateNestedManyWithoutOwnerInput
  >
  ownedOffers?: InstanceType<
    typeof OfferUncheckedCreateNestedManyWithoutOwnerInput
  >
  ownedChats?: InstanceType<
    typeof ChatUncheckedCreateNestedManyWithoutOwnerInput
  >
}
export declare class AccountUncheckedCreateWithoutChatsInput {
  id?: string
  login: string
  email?: string
  password: string
  roles?: InstanceType<typeof AccountCreaterolesInput>
  avatarId?: string
  vkId?: string
  vkAvatar?: string
  name?: string
  surname?: string
  gender?: keyof typeof Gender
  birthday?: Date | string
  loveId?: string
  createdAt?: Date | string
  updatedAt?: Date | string
  uploads?: InstanceType<
    typeof UploadUncheckedCreateNestedManyWithoutOwnerInput
  >
  offer?: InstanceType<typeof OfferUncheckedCreateNestedOneWithoutTargetInput>
  ownedMessages?: InstanceType<
    typeof MessageUncheckedCreateNestedManyWithoutAuthorInput
  >
  ownedReviews?: InstanceType<
    typeof ReviewUncheckedCreateNestedManyWithoutAuthorInput
  >
  ownedLoves?: InstanceType<
    typeof LoveUncheckedCreateNestedManyWithoutOwnerInput
  >
  ownedOffers?: InstanceType<
    typeof OfferUncheckedCreateNestedManyWithoutOwnerInput
  >
  ownedChats?: InstanceType<
    typeof ChatUncheckedCreateNestedManyWithoutOwnerInput
  >
}
export declare class AccountUncheckedCreateWithoutLoveInput {
  id?: string
  login: string
  email?: string
  password: string
  roles?: InstanceType<typeof AccountCreaterolesInput>
  avatarId?: string
  vkId?: string
  vkAvatar?: string
  name?: string
  surname?: string
  gender?: keyof typeof Gender
  birthday?: Date | string
  createdAt?: Date | string
  updatedAt?: Date | string
  uploads?: InstanceType<
    typeof UploadUncheckedCreateNestedManyWithoutOwnerInput
  >
  chats?: InstanceType<typeof ChatUncheckedCreateNestedManyWithoutMembersInput>
  offer?: InstanceType<typeof OfferUncheckedCreateNestedOneWithoutTargetInput>
  ownedMessages?: InstanceType<
    typeof MessageUncheckedCreateNestedManyWithoutAuthorInput
  >
  ownedReviews?: InstanceType<
    typeof ReviewUncheckedCreateNestedManyWithoutAuthorInput
  >
  ownedLoves?: InstanceType<
    typeof LoveUncheckedCreateNestedManyWithoutOwnerInput
  >
  ownedOffers?: InstanceType<
    typeof OfferUncheckedCreateNestedManyWithoutOwnerInput
  >
  ownedChats?: InstanceType<
    typeof ChatUncheckedCreateNestedManyWithoutOwnerInput
  >
}
export declare class AccountUncheckedCreateWithoutOfferInput {
  id?: string
  login: string
  email?: string
  password: string
  roles?: InstanceType<typeof AccountCreaterolesInput>
  avatarId?: string
  vkId?: string
  vkAvatar?: string
  name?: string
  surname?: string
  gender?: keyof typeof Gender
  birthday?: Date | string
  loveId?: string
  createdAt?: Date | string
  updatedAt?: Date | string
  uploads?: InstanceType<
    typeof UploadUncheckedCreateNestedManyWithoutOwnerInput
  >
  chats?: InstanceType<typeof ChatUncheckedCreateNestedManyWithoutMembersInput>
  ownedMessages?: InstanceType<
    typeof MessageUncheckedCreateNestedManyWithoutAuthorInput
  >
  ownedReviews?: InstanceType<
    typeof ReviewUncheckedCreateNestedManyWithoutAuthorInput
  >
  ownedLoves?: InstanceType<
    typeof LoveUncheckedCreateNestedManyWithoutOwnerInput
  >
  ownedOffers?: InstanceType<
    typeof OfferUncheckedCreateNestedManyWithoutOwnerInput
  >
  ownedChats?: InstanceType<
    typeof ChatUncheckedCreateNestedManyWithoutOwnerInput
  >
}
export declare class AccountUncheckedCreateWithoutOwnedChatsInput {
  id?: string
  login: string
  email?: string
  password: string
  roles?: InstanceType<typeof AccountCreaterolesInput>
  avatarId?: string
  vkId?: string
  vkAvatar?: string
  name?: string
  surname?: string
  gender?: keyof typeof Gender
  birthday?: Date | string
  loveId?: string
  createdAt?: Date | string
  updatedAt?: Date | string
  uploads?: InstanceType<
    typeof UploadUncheckedCreateNestedManyWithoutOwnerInput
  >
  chats?: InstanceType<typeof ChatUncheckedCreateNestedManyWithoutMembersInput>
  offer?: InstanceType<typeof OfferUncheckedCreateNestedOneWithoutTargetInput>
  ownedMessages?: InstanceType<
    typeof MessageUncheckedCreateNestedManyWithoutAuthorInput
  >
  ownedReviews?: InstanceType<
    typeof ReviewUncheckedCreateNestedManyWithoutAuthorInput
  >
  ownedLoves?: InstanceType<
    typeof LoveUncheckedCreateNestedManyWithoutOwnerInput
  >
  ownedOffers?: InstanceType<
    typeof OfferUncheckedCreateNestedManyWithoutOwnerInput
  >
}
export declare class AccountUncheckedCreateWithoutOwnedLovesInput {
  id?: string
  login: string
  email?: string
  password: string
  roles?: InstanceType<typeof AccountCreaterolesInput>
  avatarId?: string
  vkId?: string
  vkAvatar?: string
  name?: string
  surname?: string
  gender?: keyof typeof Gender
  birthday?: Date | string
  loveId?: string
  createdAt?: Date | string
  updatedAt?: Date | string
  uploads?: InstanceType<
    typeof UploadUncheckedCreateNestedManyWithoutOwnerInput
  >
  chats?: InstanceType<typeof ChatUncheckedCreateNestedManyWithoutMembersInput>
  offer?: InstanceType<typeof OfferUncheckedCreateNestedOneWithoutTargetInput>
  ownedMessages?: InstanceType<
    typeof MessageUncheckedCreateNestedManyWithoutAuthorInput
  >
  ownedReviews?: InstanceType<
    typeof ReviewUncheckedCreateNestedManyWithoutAuthorInput
  >
  ownedOffers?: InstanceType<
    typeof OfferUncheckedCreateNestedManyWithoutOwnerInput
  >
  ownedChats?: InstanceType<
    typeof ChatUncheckedCreateNestedManyWithoutOwnerInput
  >
}
export declare class AccountUncheckedCreateWithoutOwnedMessagesInput {
  id?: string
  login: string
  email?: string
  password: string
  roles?: InstanceType<typeof AccountCreaterolesInput>
  avatarId?: string
  vkId?: string
  vkAvatar?: string
  name?: string
  surname?: string
  gender?: keyof typeof Gender
  birthday?: Date | string
  loveId?: string
  createdAt?: Date | string
  updatedAt?: Date | string
  uploads?: InstanceType<
    typeof UploadUncheckedCreateNestedManyWithoutOwnerInput
  >
  chats?: InstanceType<typeof ChatUncheckedCreateNestedManyWithoutMembersInput>
  offer?: InstanceType<typeof OfferUncheckedCreateNestedOneWithoutTargetInput>
  ownedReviews?: InstanceType<
    typeof ReviewUncheckedCreateNestedManyWithoutAuthorInput
  >
  ownedLoves?: InstanceType<
    typeof LoveUncheckedCreateNestedManyWithoutOwnerInput
  >
  ownedOffers?: InstanceType<
    typeof OfferUncheckedCreateNestedManyWithoutOwnerInput
  >
  ownedChats?: InstanceType<
    typeof ChatUncheckedCreateNestedManyWithoutOwnerInput
  >
}
export declare class AccountUncheckedCreateWithoutOwnedOffersInput {
  id?: string
  login: string
  email?: string
  password: string
  roles?: InstanceType<typeof AccountCreaterolesInput>
  avatarId?: string
  vkId?: string
  vkAvatar?: string
  name?: string
  surname?: string
  gender?: keyof typeof Gender
  birthday?: Date | string
  loveId?: string
  createdAt?: Date | string
  updatedAt?: Date | string
  uploads?: InstanceType<
    typeof UploadUncheckedCreateNestedManyWithoutOwnerInput
  >
  chats?: InstanceType<typeof ChatUncheckedCreateNestedManyWithoutMembersInput>
  offer?: InstanceType<typeof OfferUncheckedCreateNestedOneWithoutTargetInput>
  ownedMessages?: InstanceType<
    typeof MessageUncheckedCreateNestedManyWithoutAuthorInput
  >
  ownedReviews?: InstanceType<
    typeof ReviewUncheckedCreateNestedManyWithoutAuthorInput
  >
  ownedLoves?: InstanceType<
    typeof LoveUncheckedCreateNestedManyWithoutOwnerInput
  >
  ownedChats?: InstanceType<
    typeof ChatUncheckedCreateNestedManyWithoutOwnerInput
  >
}
export declare class AccountUncheckedCreateWithoutOwnedReviewsInput {
  id?: string
  login: string
  email?: string
  password: string
  roles?: InstanceType<typeof AccountCreaterolesInput>
  avatarId?: string
  vkId?: string
  vkAvatar?: string
  name?: string
  surname?: string
  gender?: keyof typeof Gender
  birthday?: Date | string
  loveId?: string
  createdAt?: Date | string
  updatedAt?: Date | string
  uploads?: InstanceType<
    typeof UploadUncheckedCreateNestedManyWithoutOwnerInput
  >
  chats?: InstanceType<typeof ChatUncheckedCreateNestedManyWithoutMembersInput>
  offer?: InstanceType<typeof OfferUncheckedCreateNestedOneWithoutTargetInput>
  ownedMessages?: InstanceType<
    typeof MessageUncheckedCreateNestedManyWithoutAuthorInput
  >
  ownedLoves?: InstanceType<
    typeof LoveUncheckedCreateNestedManyWithoutOwnerInput
  >
  ownedOffers?: InstanceType<
    typeof OfferUncheckedCreateNestedManyWithoutOwnerInput
  >
  ownedChats?: InstanceType<
    typeof ChatUncheckedCreateNestedManyWithoutOwnerInput
  >
}
export declare class AccountUncheckedCreateWithoutUploadsInput {
  id?: string
  login: string
  email?: string
  password: string
  roles?: InstanceType<typeof AccountCreaterolesInput>
  avatarId?: string
  vkId?: string
  vkAvatar?: string
  name?: string
  surname?: string
  gender?: keyof typeof Gender
  birthday?: Date | string
  loveId?: string
  createdAt?: Date | string
  updatedAt?: Date | string
  chats?: InstanceType<typeof ChatUncheckedCreateNestedManyWithoutMembersInput>
  offer?: InstanceType<typeof OfferUncheckedCreateNestedOneWithoutTargetInput>
  ownedMessages?: InstanceType<
    typeof MessageUncheckedCreateNestedManyWithoutAuthorInput
  >
  ownedReviews?: InstanceType<
    typeof ReviewUncheckedCreateNestedManyWithoutAuthorInput
  >
  ownedLoves?: InstanceType<
    typeof LoveUncheckedCreateNestedManyWithoutOwnerInput
  >
  ownedOffers?: InstanceType<
    typeof OfferUncheckedCreateNestedManyWithoutOwnerInput
  >
  ownedChats?: InstanceType<
    typeof ChatUncheckedCreateNestedManyWithoutOwnerInput
  >
}
export declare class AccountUncheckedCreateInput {
  id?: string
  login: string
  email?: string
  password: string
  roles?: InstanceType<typeof AccountCreaterolesInput>
  avatarId?: string
  vkId?: string
  vkAvatar?: string
  name?: string
  surname?: string
  gender?: keyof typeof Gender
  birthday?: Date | string
  loveId?: string
  createdAt?: Date | string
  updatedAt?: Date | string
  uploads?: InstanceType<
    typeof UploadUncheckedCreateNestedManyWithoutOwnerInput
  >
  chats?: InstanceType<typeof ChatUncheckedCreateNestedManyWithoutMembersInput>
  offer?: InstanceType<typeof OfferUncheckedCreateNestedOneWithoutTargetInput>
  ownedMessages?: InstanceType<
    typeof MessageUncheckedCreateNestedManyWithoutAuthorInput
  >
  ownedReviews?: InstanceType<
    typeof ReviewUncheckedCreateNestedManyWithoutAuthorInput
  >
  ownedLoves?: InstanceType<
    typeof LoveUncheckedCreateNestedManyWithoutOwnerInput
  >
  ownedOffers?: InstanceType<
    typeof OfferUncheckedCreateNestedManyWithoutOwnerInput
  >
  ownedChats?: InstanceType<
    typeof ChatUncheckedCreateNestedManyWithoutOwnerInput
  >
}
export declare class AccountUncheckedUpdateManyWithoutAvatarNestedInput {
  create?: Array<AccountCreateWithoutAvatarInput>
  connectOrCreate?: Array<AccountCreateOrConnectWithoutAvatarInput>
  upsert?: Array<AccountUpsertWithWhereUniqueWithoutAvatarInput>
  createMany?: InstanceType<typeof AccountCreateManyAvatarInputEnvelope>
  set?: Array<
    Prisma.AtLeast<AccountWhereUniqueInput, 'id' | 'login' | 'email' | 'vkId'>
  >
  disconnect?: Array<
    Prisma.AtLeast<AccountWhereUniqueInput, 'id' | 'login' | 'email' | 'vkId'>
  >
  delete?: Array<
    Prisma.AtLeast<AccountWhereUniqueInput, 'id' | 'login' | 'email' | 'vkId'>
  >
  connect?: Array<
    Prisma.AtLeast<AccountWhereUniqueInput, 'id' | 'login' | 'email' | 'vkId'>
  >
  update?: Array<AccountUpdateWithWhereUniqueWithoutAvatarInput>
  updateMany?: Array<AccountUpdateManyWithWhereWithoutAvatarInput>
  deleteMany?: Array<AccountScalarWhereInput>
}
export declare class AccountUncheckedUpdateManyWithoutAvatarInput {
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>
  login?: InstanceType<typeof StringFieldUpdateOperationsInput>
  email?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  password?: InstanceType<typeof StringFieldUpdateOperationsInput>
  roles?: InstanceType<typeof AccountUpdaterolesInput>
  vkId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  vkAvatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  name?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  surname?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  gender?: InstanceType<typeof NullableEnumGenderFieldUpdateOperationsInput>
  birthday?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>
  loveId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
}
export declare class AccountUncheckedUpdateManyWithoutChatsNestedInput {
  create?: Array<AccountCreateWithoutChatsInput>
  connectOrCreate?: Array<AccountCreateOrConnectWithoutChatsInput>
  upsert?: Array<AccountUpsertWithWhereUniqueWithoutChatsInput>
  set?: Array<
    Prisma.AtLeast<AccountWhereUniqueInput, 'id' | 'login' | 'email' | 'vkId'>
  >
  disconnect?: Array<
    Prisma.AtLeast<AccountWhereUniqueInput, 'id' | 'login' | 'email' | 'vkId'>
  >
  delete?: Array<
    Prisma.AtLeast<AccountWhereUniqueInput, 'id' | 'login' | 'email' | 'vkId'>
  >
  connect?: Array<
    Prisma.AtLeast<AccountWhereUniqueInput, 'id' | 'login' | 'email' | 'vkId'>
  >
  update?: Array<AccountUpdateWithWhereUniqueWithoutChatsInput>
  updateMany?: Array<AccountUpdateManyWithWhereWithoutChatsInput>
  deleteMany?: Array<AccountScalarWhereInput>
}
export declare class AccountUncheckedUpdateManyWithoutChatsInput {
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>
  login?: InstanceType<typeof StringFieldUpdateOperationsInput>
  email?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  password?: InstanceType<typeof StringFieldUpdateOperationsInput>
  roles?: InstanceType<typeof AccountUpdaterolesInput>
  avatarId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  vkId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  vkAvatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  name?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  surname?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  gender?: InstanceType<typeof NullableEnumGenderFieldUpdateOperationsInput>
  birthday?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>
  loveId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
}
export declare class AccountUncheckedUpdateManyWithoutLoveNestedInput {
  create?: Array<AccountCreateWithoutLoveInput>
  connectOrCreate?: Array<AccountCreateOrConnectWithoutLoveInput>
  upsert?: Array<AccountUpsertWithWhereUniqueWithoutLoveInput>
  createMany?: InstanceType<typeof AccountCreateManyLoveInputEnvelope>
  set?: Array<
    Prisma.AtLeast<AccountWhereUniqueInput, 'id' | 'login' | 'email' | 'vkId'>
  >
  disconnect?: Array<
    Prisma.AtLeast<AccountWhereUniqueInput, 'id' | 'login' | 'email' | 'vkId'>
  >
  delete?: Array<
    Prisma.AtLeast<AccountWhereUniqueInput, 'id' | 'login' | 'email' | 'vkId'>
  >
  connect?: Array<
    Prisma.AtLeast<AccountWhereUniqueInput, 'id' | 'login' | 'email' | 'vkId'>
  >
  update?: Array<AccountUpdateWithWhereUniqueWithoutLoveInput>
  updateMany?: Array<AccountUpdateManyWithWhereWithoutLoveInput>
  deleteMany?: Array<AccountScalarWhereInput>
}
export declare class AccountUncheckedUpdateManyWithoutLoveInput {
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>
  login?: InstanceType<typeof StringFieldUpdateOperationsInput>
  email?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  password?: InstanceType<typeof StringFieldUpdateOperationsInput>
  roles?: InstanceType<typeof AccountUpdaterolesInput>
  avatarId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  vkId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  vkAvatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  name?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  surname?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  gender?: InstanceType<typeof NullableEnumGenderFieldUpdateOperationsInput>
  birthday?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
}
export declare class AccountUncheckedUpdateManyInput {
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>
  login?: InstanceType<typeof StringFieldUpdateOperationsInput>
  email?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  password?: InstanceType<typeof StringFieldUpdateOperationsInput>
  roles?: InstanceType<typeof AccountUpdaterolesInput>
  avatarId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  vkId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  vkAvatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  name?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  surname?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  gender?: InstanceType<typeof NullableEnumGenderFieldUpdateOperationsInput>
  birthday?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>
  loveId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
}
export declare class AccountUncheckedUpdateWithoutAvatarInput {
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>
  login?: InstanceType<typeof StringFieldUpdateOperationsInput>
  email?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  password?: InstanceType<typeof StringFieldUpdateOperationsInput>
  roles?: InstanceType<typeof AccountUpdaterolesInput>
  vkId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  vkAvatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  name?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  surname?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  gender?: InstanceType<typeof NullableEnumGenderFieldUpdateOperationsInput>
  birthday?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>
  loveId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  uploads?: InstanceType<
    typeof UploadUncheckedUpdateManyWithoutOwnerNestedInput
  >
  chats?: InstanceType<typeof ChatUncheckedUpdateManyWithoutMembersNestedInput>
  offer?: InstanceType<typeof OfferUncheckedUpdateOneWithoutTargetNestedInput>
  ownedMessages?: InstanceType<
    typeof MessageUncheckedUpdateManyWithoutAuthorNestedInput
  >
  ownedReviews?: InstanceType<
    typeof ReviewUncheckedUpdateManyWithoutAuthorNestedInput
  >
  ownedLoves?: InstanceType<
    typeof LoveUncheckedUpdateManyWithoutOwnerNestedInput
  >
  ownedOffers?: InstanceType<
    typeof OfferUncheckedUpdateManyWithoutOwnerNestedInput
  >
  ownedChats?: InstanceType<
    typeof ChatUncheckedUpdateManyWithoutOwnerNestedInput
  >
}
export declare class AccountUncheckedUpdateWithoutChatsInput {
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>
  login?: InstanceType<typeof StringFieldUpdateOperationsInput>
  email?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  password?: InstanceType<typeof StringFieldUpdateOperationsInput>
  roles?: InstanceType<typeof AccountUpdaterolesInput>
  avatarId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  vkId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  vkAvatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  name?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  surname?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  gender?: InstanceType<typeof NullableEnumGenderFieldUpdateOperationsInput>
  birthday?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>
  loveId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  uploads?: InstanceType<
    typeof UploadUncheckedUpdateManyWithoutOwnerNestedInput
  >
  offer?: InstanceType<typeof OfferUncheckedUpdateOneWithoutTargetNestedInput>
  ownedMessages?: InstanceType<
    typeof MessageUncheckedUpdateManyWithoutAuthorNestedInput
  >
  ownedReviews?: InstanceType<
    typeof ReviewUncheckedUpdateManyWithoutAuthorNestedInput
  >
  ownedLoves?: InstanceType<
    typeof LoveUncheckedUpdateManyWithoutOwnerNestedInput
  >
  ownedOffers?: InstanceType<
    typeof OfferUncheckedUpdateManyWithoutOwnerNestedInput
  >
  ownedChats?: InstanceType<
    typeof ChatUncheckedUpdateManyWithoutOwnerNestedInput
  >
}
export declare class AccountUncheckedUpdateWithoutLoveInput {
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>
  login?: InstanceType<typeof StringFieldUpdateOperationsInput>
  email?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  password?: InstanceType<typeof StringFieldUpdateOperationsInput>
  roles?: InstanceType<typeof AccountUpdaterolesInput>
  avatarId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  vkId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  vkAvatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  name?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  surname?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  gender?: InstanceType<typeof NullableEnumGenderFieldUpdateOperationsInput>
  birthday?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  uploads?: InstanceType<
    typeof UploadUncheckedUpdateManyWithoutOwnerNestedInput
  >
  chats?: InstanceType<typeof ChatUncheckedUpdateManyWithoutMembersNestedInput>
  offer?: InstanceType<typeof OfferUncheckedUpdateOneWithoutTargetNestedInput>
  ownedMessages?: InstanceType<
    typeof MessageUncheckedUpdateManyWithoutAuthorNestedInput
  >
  ownedReviews?: InstanceType<
    typeof ReviewUncheckedUpdateManyWithoutAuthorNestedInput
  >
  ownedLoves?: InstanceType<
    typeof LoveUncheckedUpdateManyWithoutOwnerNestedInput
  >
  ownedOffers?: InstanceType<
    typeof OfferUncheckedUpdateManyWithoutOwnerNestedInput
  >
  ownedChats?: InstanceType<
    typeof ChatUncheckedUpdateManyWithoutOwnerNestedInput
  >
}
export declare class AccountUncheckedUpdateWithoutOfferInput {
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>
  login?: InstanceType<typeof StringFieldUpdateOperationsInput>
  email?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  password?: InstanceType<typeof StringFieldUpdateOperationsInput>
  roles?: InstanceType<typeof AccountUpdaterolesInput>
  avatarId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  vkId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  vkAvatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  name?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  surname?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  gender?: InstanceType<typeof NullableEnumGenderFieldUpdateOperationsInput>
  birthday?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>
  loveId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  uploads?: InstanceType<
    typeof UploadUncheckedUpdateManyWithoutOwnerNestedInput
  >
  chats?: InstanceType<typeof ChatUncheckedUpdateManyWithoutMembersNestedInput>
  ownedMessages?: InstanceType<
    typeof MessageUncheckedUpdateManyWithoutAuthorNestedInput
  >
  ownedReviews?: InstanceType<
    typeof ReviewUncheckedUpdateManyWithoutAuthorNestedInput
  >
  ownedLoves?: InstanceType<
    typeof LoveUncheckedUpdateManyWithoutOwnerNestedInput
  >
  ownedOffers?: InstanceType<
    typeof OfferUncheckedUpdateManyWithoutOwnerNestedInput
  >
  ownedChats?: InstanceType<
    typeof ChatUncheckedUpdateManyWithoutOwnerNestedInput
  >
}
export declare class AccountUncheckedUpdateWithoutOwnedChatsInput {
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>
  login?: InstanceType<typeof StringFieldUpdateOperationsInput>
  email?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  password?: InstanceType<typeof StringFieldUpdateOperationsInput>
  roles?: InstanceType<typeof AccountUpdaterolesInput>
  avatarId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  vkId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  vkAvatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  name?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  surname?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  gender?: InstanceType<typeof NullableEnumGenderFieldUpdateOperationsInput>
  birthday?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>
  loveId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  uploads?: InstanceType<
    typeof UploadUncheckedUpdateManyWithoutOwnerNestedInput
  >
  chats?: InstanceType<typeof ChatUncheckedUpdateManyWithoutMembersNestedInput>
  offer?: InstanceType<typeof OfferUncheckedUpdateOneWithoutTargetNestedInput>
  ownedMessages?: InstanceType<
    typeof MessageUncheckedUpdateManyWithoutAuthorNestedInput
  >
  ownedReviews?: InstanceType<
    typeof ReviewUncheckedUpdateManyWithoutAuthorNestedInput
  >
  ownedLoves?: InstanceType<
    typeof LoveUncheckedUpdateManyWithoutOwnerNestedInput
  >
  ownedOffers?: InstanceType<
    typeof OfferUncheckedUpdateManyWithoutOwnerNestedInput
  >
}
export declare class AccountUncheckedUpdateWithoutOwnedLovesInput {
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>
  login?: InstanceType<typeof StringFieldUpdateOperationsInput>
  email?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  password?: InstanceType<typeof StringFieldUpdateOperationsInput>
  roles?: InstanceType<typeof AccountUpdaterolesInput>
  avatarId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  vkId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  vkAvatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  name?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  surname?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  gender?: InstanceType<typeof NullableEnumGenderFieldUpdateOperationsInput>
  birthday?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>
  loveId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  uploads?: InstanceType<
    typeof UploadUncheckedUpdateManyWithoutOwnerNestedInput
  >
  chats?: InstanceType<typeof ChatUncheckedUpdateManyWithoutMembersNestedInput>
  offer?: InstanceType<typeof OfferUncheckedUpdateOneWithoutTargetNestedInput>
  ownedMessages?: InstanceType<
    typeof MessageUncheckedUpdateManyWithoutAuthorNestedInput
  >
  ownedReviews?: InstanceType<
    typeof ReviewUncheckedUpdateManyWithoutAuthorNestedInput
  >
  ownedOffers?: InstanceType<
    typeof OfferUncheckedUpdateManyWithoutOwnerNestedInput
  >
  ownedChats?: InstanceType<
    typeof ChatUncheckedUpdateManyWithoutOwnerNestedInput
  >
}
export declare class AccountUncheckedUpdateWithoutOwnedMessagesInput {
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>
  login?: InstanceType<typeof StringFieldUpdateOperationsInput>
  email?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  password?: InstanceType<typeof StringFieldUpdateOperationsInput>
  roles?: InstanceType<typeof AccountUpdaterolesInput>
  avatarId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  vkId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  vkAvatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  name?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  surname?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  gender?: InstanceType<typeof NullableEnumGenderFieldUpdateOperationsInput>
  birthday?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>
  loveId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  uploads?: InstanceType<
    typeof UploadUncheckedUpdateManyWithoutOwnerNestedInput
  >
  chats?: InstanceType<typeof ChatUncheckedUpdateManyWithoutMembersNestedInput>
  offer?: InstanceType<typeof OfferUncheckedUpdateOneWithoutTargetNestedInput>
  ownedReviews?: InstanceType<
    typeof ReviewUncheckedUpdateManyWithoutAuthorNestedInput
  >
  ownedLoves?: InstanceType<
    typeof LoveUncheckedUpdateManyWithoutOwnerNestedInput
  >
  ownedOffers?: InstanceType<
    typeof OfferUncheckedUpdateManyWithoutOwnerNestedInput
  >
  ownedChats?: InstanceType<
    typeof ChatUncheckedUpdateManyWithoutOwnerNestedInput
  >
}
export declare class AccountUncheckedUpdateWithoutOwnedOffersInput {
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>
  login?: InstanceType<typeof StringFieldUpdateOperationsInput>
  email?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  password?: InstanceType<typeof StringFieldUpdateOperationsInput>
  roles?: InstanceType<typeof AccountUpdaterolesInput>
  avatarId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  vkId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  vkAvatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  name?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  surname?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  gender?: InstanceType<typeof NullableEnumGenderFieldUpdateOperationsInput>
  birthday?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>
  loveId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  uploads?: InstanceType<
    typeof UploadUncheckedUpdateManyWithoutOwnerNestedInput
  >
  chats?: InstanceType<typeof ChatUncheckedUpdateManyWithoutMembersNestedInput>
  offer?: InstanceType<typeof OfferUncheckedUpdateOneWithoutTargetNestedInput>
  ownedMessages?: InstanceType<
    typeof MessageUncheckedUpdateManyWithoutAuthorNestedInput
  >
  ownedReviews?: InstanceType<
    typeof ReviewUncheckedUpdateManyWithoutAuthorNestedInput
  >
  ownedLoves?: InstanceType<
    typeof LoveUncheckedUpdateManyWithoutOwnerNestedInput
  >
  ownedChats?: InstanceType<
    typeof ChatUncheckedUpdateManyWithoutOwnerNestedInput
  >
}
export declare class AccountUncheckedUpdateWithoutOwnedReviewsInput {
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>
  login?: InstanceType<typeof StringFieldUpdateOperationsInput>
  email?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  password?: InstanceType<typeof StringFieldUpdateOperationsInput>
  roles?: InstanceType<typeof AccountUpdaterolesInput>
  avatarId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  vkId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  vkAvatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  name?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  surname?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  gender?: InstanceType<typeof NullableEnumGenderFieldUpdateOperationsInput>
  birthday?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>
  loveId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  uploads?: InstanceType<
    typeof UploadUncheckedUpdateManyWithoutOwnerNestedInput
  >
  chats?: InstanceType<typeof ChatUncheckedUpdateManyWithoutMembersNestedInput>
  offer?: InstanceType<typeof OfferUncheckedUpdateOneWithoutTargetNestedInput>
  ownedMessages?: InstanceType<
    typeof MessageUncheckedUpdateManyWithoutAuthorNestedInput
  >
  ownedLoves?: InstanceType<
    typeof LoveUncheckedUpdateManyWithoutOwnerNestedInput
  >
  ownedOffers?: InstanceType<
    typeof OfferUncheckedUpdateManyWithoutOwnerNestedInput
  >
  ownedChats?: InstanceType<
    typeof ChatUncheckedUpdateManyWithoutOwnerNestedInput
  >
}
export declare class AccountUncheckedUpdateWithoutUploadsInput {
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>
  login?: InstanceType<typeof StringFieldUpdateOperationsInput>
  email?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  password?: InstanceType<typeof StringFieldUpdateOperationsInput>
  roles?: InstanceType<typeof AccountUpdaterolesInput>
  avatarId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  vkId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  vkAvatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  name?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  surname?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  gender?: InstanceType<typeof NullableEnumGenderFieldUpdateOperationsInput>
  birthday?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>
  loveId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  chats?: InstanceType<typeof ChatUncheckedUpdateManyWithoutMembersNestedInput>
  offer?: InstanceType<typeof OfferUncheckedUpdateOneWithoutTargetNestedInput>
  ownedMessages?: InstanceType<
    typeof MessageUncheckedUpdateManyWithoutAuthorNestedInput
  >
  ownedReviews?: InstanceType<
    typeof ReviewUncheckedUpdateManyWithoutAuthorNestedInput
  >
  ownedLoves?: InstanceType<
    typeof LoveUncheckedUpdateManyWithoutOwnerNestedInput
  >
  ownedOffers?: InstanceType<
    typeof OfferUncheckedUpdateManyWithoutOwnerNestedInput
  >
  ownedChats?: InstanceType<
    typeof ChatUncheckedUpdateManyWithoutOwnerNestedInput
  >
}
export declare class AccountUncheckedUpdateInput {
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>
  login?: InstanceType<typeof StringFieldUpdateOperationsInput>
  email?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  password?: InstanceType<typeof StringFieldUpdateOperationsInput>
  roles?: InstanceType<typeof AccountUpdaterolesInput>
  avatarId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  vkId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  vkAvatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  name?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  surname?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  gender?: InstanceType<typeof NullableEnumGenderFieldUpdateOperationsInput>
  birthday?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>
  loveId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  uploads?: InstanceType<
    typeof UploadUncheckedUpdateManyWithoutOwnerNestedInput
  >
  chats?: InstanceType<typeof ChatUncheckedUpdateManyWithoutMembersNestedInput>
  offer?: InstanceType<typeof OfferUncheckedUpdateOneWithoutTargetNestedInput>
  ownedMessages?: InstanceType<
    typeof MessageUncheckedUpdateManyWithoutAuthorNestedInput
  >
  ownedReviews?: InstanceType<
    typeof ReviewUncheckedUpdateManyWithoutAuthorNestedInput
  >
  ownedLoves?: InstanceType<
    typeof LoveUncheckedUpdateManyWithoutOwnerNestedInput
  >
  ownedOffers?: InstanceType<
    typeof OfferUncheckedUpdateManyWithoutOwnerNestedInput
  >
  ownedChats?: InstanceType<
    typeof ChatUncheckedUpdateManyWithoutOwnerNestedInput
  >
}
export declare class AccountUpdateManyMutationInput {
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>
  login?: InstanceType<typeof StringFieldUpdateOperationsInput>
  email?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  password?: InstanceType<typeof StringFieldUpdateOperationsInput>
  roles?: InstanceType<typeof AccountUpdaterolesInput>
  vkId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  vkAvatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  name?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  surname?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  gender?: InstanceType<typeof NullableEnumGenderFieldUpdateOperationsInput>
  birthday?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
}
export declare class AccountUpdateManyWithWhereWithoutAvatarInput {
  where: InstanceType<typeof AccountScalarWhereInput>
  data: InstanceType<typeof AccountUpdateManyMutationInput>
}
export declare class AccountUpdateManyWithWhereWithoutChatsInput {
  where: InstanceType<typeof AccountScalarWhereInput>
  data: InstanceType<typeof AccountUpdateManyMutationInput>
}
export declare class AccountUpdateManyWithWhereWithoutLoveInput {
  where: InstanceType<typeof AccountScalarWhereInput>
  data: InstanceType<typeof AccountUpdateManyMutationInput>
}
export declare class AccountUpdateManyWithoutAvatarNestedInput {
  create?: Array<AccountCreateWithoutAvatarInput>
  connectOrCreate?: Array<AccountCreateOrConnectWithoutAvatarInput>
  upsert?: Array<AccountUpsertWithWhereUniqueWithoutAvatarInput>
  createMany?: InstanceType<typeof AccountCreateManyAvatarInputEnvelope>
  set?: Array<
    Prisma.AtLeast<AccountWhereUniqueInput, 'id' | 'login' | 'email' | 'vkId'>
  >
  disconnect?: Array<
    Prisma.AtLeast<AccountWhereUniqueInput, 'id' | 'login' | 'email' | 'vkId'>
  >
  delete?: Array<
    Prisma.AtLeast<AccountWhereUniqueInput, 'id' | 'login' | 'email' | 'vkId'>
  >
  connect?: Array<
    Prisma.AtLeast<AccountWhereUniqueInput, 'id' | 'login' | 'email' | 'vkId'>
  >
  update?: Array<AccountUpdateWithWhereUniqueWithoutAvatarInput>
  updateMany?: Array<AccountUpdateManyWithWhereWithoutAvatarInput>
  deleteMany?: Array<AccountScalarWhereInput>
}
export declare class AccountUpdateManyWithoutChatsNestedInput {
  create?: Array<AccountCreateWithoutChatsInput>
  connectOrCreate?: Array<AccountCreateOrConnectWithoutChatsInput>
  upsert?: Array<AccountUpsertWithWhereUniqueWithoutChatsInput>
  set?: Array<
    Prisma.AtLeast<AccountWhereUniqueInput, 'id' | 'login' | 'email' | 'vkId'>
  >
  disconnect?: Array<
    Prisma.AtLeast<AccountWhereUniqueInput, 'id' | 'login' | 'email' | 'vkId'>
  >
  delete?: Array<
    Prisma.AtLeast<AccountWhereUniqueInput, 'id' | 'login' | 'email' | 'vkId'>
  >
  connect?: Array<
    Prisma.AtLeast<AccountWhereUniqueInput, 'id' | 'login' | 'email' | 'vkId'>
  >
  update?: Array<AccountUpdateWithWhereUniqueWithoutChatsInput>
  updateMany?: Array<AccountUpdateManyWithWhereWithoutChatsInput>
  deleteMany?: Array<AccountScalarWhereInput>
}
export declare class AccountUpdateManyWithoutLoveNestedInput {
  create?: Array<AccountCreateWithoutLoveInput>
  connectOrCreate?: Array<AccountCreateOrConnectWithoutLoveInput>
  upsert?: Array<AccountUpsertWithWhereUniqueWithoutLoveInput>
  createMany?: InstanceType<typeof AccountCreateManyLoveInputEnvelope>
  set?: Array<
    Prisma.AtLeast<AccountWhereUniqueInput, 'id' | 'login' | 'email' | 'vkId'>
  >
  disconnect?: Array<
    Prisma.AtLeast<AccountWhereUniqueInput, 'id' | 'login' | 'email' | 'vkId'>
  >
  delete?: Array<
    Prisma.AtLeast<AccountWhereUniqueInput, 'id' | 'login' | 'email' | 'vkId'>
  >
  connect?: Array<
    Prisma.AtLeast<AccountWhereUniqueInput, 'id' | 'login' | 'email' | 'vkId'>
  >
  update?: Array<AccountUpdateWithWhereUniqueWithoutLoveInput>
  updateMany?: Array<AccountUpdateManyWithWhereWithoutLoveInput>
  deleteMany?: Array<AccountScalarWhereInput>
}
export declare class AccountUpdateOneRequiredWithoutOfferNestedInput {
  create?: InstanceType<typeof AccountCreateWithoutOfferInput>
  connectOrCreate?: InstanceType<typeof AccountCreateOrConnectWithoutOfferInput>
  upsert?: InstanceType<typeof AccountUpsertWithoutOfferInput>
  connect?: Prisma.AtLeast<
    AccountWhereUniqueInput,
    'id' | 'login' | 'email' | 'vkId'
  >
  update?: InstanceType<typeof AccountUpdateToOneWithWhereWithoutOfferInput>
}
export declare class AccountUpdateOneRequiredWithoutOwnedChatsNestedInput {
  create?: InstanceType<typeof AccountCreateWithoutOwnedChatsInput>
  connectOrCreate?: InstanceType<
    typeof AccountCreateOrConnectWithoutOwnedChatsInput
  >
  upsert?: InstanceType<typeof AccountUpsertWithoutOwnedChatsInput>
  connect?: Prisma.AtLeast<
    AccountWhereUniqueInput,
    'id' | 'login' | 'email' | 'vkId'
  >
  update?: InstanceType<
    typeof AccountUpdateToOneWithWhereWithoutOwnedChatsInput
  >
}
export declare class AccountUpdateOneRequiredWithoutOwnedLovesNestedInput {
  create?: InstanceType<typeof AccountCreateWithoutOwnedLovesInput>
  connectOrCreate?: InstanceType<
    typeof AccountCreateOrConnectWithoutOwnedLovesInput
  >
  upsert?: InstanceType<typeof AccountUpsertWithoutOwnedLovesInput>
  connect?: Prisma.AtLeast<
    AccountWhereUniqueInput,
    'id' | 'login' | 'email' | 'vkId'
  >
  update?: InstanceType<
    typeof AccountUpdateToOneWithWhereWithoutOwnedLovesInput
  >
}
export declare class AccountUpdateOneRequiredWithoutOwnedMessagesNestedInput {
  create?: InstanceType<typeof AccountCreateWithoutOwnedMessagesInput>
  connectOrCreate?: InstanceType<
    typeof AccountCreateOrConnectWithoutOwnedMessagesInput
  >
  upsert?: InstanceType<typeof AccountUpsertWithoutOwnedMessagesInput>
  connect?: Prisma.AtLeast<
    AccountWhereUniqueInput,
    'id' | 'login' | 'email' | 'vkId'
  >
  update?: InstanceType<
    typeof AccountUpdateToOneWithWhereWithoutOwnedMessagesInput
  >
}
export declare class AccountUpdateOneRequiredWithoutOwnedOffersNestedInput {
  create?: InstanceType<typeof AccountCreateWithoutOwnedOffersInput>
  connectOrCreate?: InstanceType<
    typeof AccountCreateOrConnectWithoutOwnedOffersInput
  >
  upsert?: InstanceType<typeof AccountUpsertWithoutOwnedOffersInput>
  connect?: Prisma.AtLeast<
    AccountWhereUniqueInput,
    'id' | 'login' | 'email' | 'vkId'
  >
  update?: InstanceType<
    typeof AccountUpdateToOneWithWhereWithoutOwnedOffersInput
  >
}
export declare class AccountUpdateOneRequiredWithoutOwnedReviewsNestedInput {
  create?: InstanceType<typeof AccountCreateWithoutOwnedReviewsInput>
  connectOrCreate?: InstanceType<
    typeof AccountCreateOrConnectWithoutOwnedReviewsInput
  >
  upsert?: InstanceType<typeof AccountUpsertWithoutOwnedReviewsInput>
  connect?: Prisma.AtLeast<
    AccountWhereUniqueInput,
    'id' | 'login' | 'email' | 'vkId'
  >
  update?: InstanceType<
    typeof AccountUpdateToOneWithWhereWithoutOwnedReviewsInput
  >
}
export declare class AccountUpdateOneRequiredWithoutUploadsNestedInput {
  create?: InstanceType<typeof AccountCreateWithoutUploadsInput>
  connectOrCreate?: InstanceType<
    typeof AccountCreateOrConnectWithoutUploadsInput
  >
  upsert?: InstanceType<typeof AccountUpsertWithoutUploadsInput>
  connect?: Prisma.AtLeast<
    AccountWhereUniqueInput,
    'id' | 'login' | 'email' | 'vkId'
  >
  update?: InstanceType<typeof AccountUpdateToOneWithWhereWithoutUploadsInput>
}
export declare class AccountUpdateToOneWithWhereWithoutOfferInput {
  where?: InstanceType<typeof AccountWhereInput>
  data: InstanceType<typeof AccountUpdateWithoutOfferInput>
}
export declare class AccountUpdateToOneWithWhereWithoutOwnedChatsInput {
  where?: InstanceType<typeof AccountWhereInput>
  data: InstanceType<typeof AccountUpdateWithoutOwnedChatsInput>
}
export declare class AccountUpdateToOneWithWhereWithoutOwnedLovesInput {
  where?: InstanceType<typeof AccountWhereInput>
  data: InstanceType<typeof AccountUpdateWithoutOwnedLovesInput>
}
export declare class AccountUpdateToOneWithWhereWithoutOwnedMessagesInput {
  where?: InstanceType<typeof AccountWhereInput>
  data: InstanceType<typeof AccountUpdateWithoutOwnedMessagesInput>
}
export declare class AccountUpdateToOneWithWhereWithoutOwnedOffersInput {
  where?: InstanceType<typeof AccountWhereInput>
  data: InstanceType<typeof AccountUpdateWithoutOwnedOffersInput>
}
export declare class AccountUpdateToOneWithWhereWithoutOwnedReviewsInput {
  where?: InstanceType<typeof AccountWhereInput>
  data: InstanceType<typeof AccountUpdateWithoutOwnedReviewsInput>
}
export declare class AccountUpdateToOneWithWhereWithoutUploadsInput {
  where?: InstanceType<typeof AccountWhereInput>
  data: InstanceType<typeof AccountUpdateWithoutUploadsInput>
}
export declare class AccountUpdateWithWhereUniqueWithoutAvatarInput {
  where: Prisma.AtLeast<
    AccountWhereUniqueInput,
    'id' | 'login' | 'email' | 'vkId'
  >
  data: InstanceType<typeof AccountUpdateWithoutAvatarInput>
}
export declare class AccountUpdateWithWhereUniqueWithoutChatsInput {
  where: Prisma.AtLeast<
    AccountWhereUniqueInput,
    'id' | 'login' | 'email' | 'vkId'
  >
  data: InstanceType<typeof AccountUpdateWithoutChatsInput>
}
export declare class AccountUpdateWithWhereUniqueWithoutLoveInput {
  where: Prisma.AtLeast<
    AccountWhereUniqueInput,
    'id' | 'login' | 'email' | 'vkId'
  >
  data: InstanceType<typeof AccountUpdateWithoutLoveInput>
}
export declare class AccountUpdateWithoutAvatarInput {
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>
  login?: InstanceType<typeof StringFieldUpdateOperationsInput>
  email?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  password?: InstanceType<typeof StringFieldUpdateOperationsInput>
  roles?: InstanceType<typeof AccountUpdaterolesInput>
  vkId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  vkAvatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  name?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  surname?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  gender?: InstanceType<typeof NullableEnumGenderFieldUpdateOperationsInput>
  birthday?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  uploads?: InstanceType<typeof UploadUpdateManyWithoutOwnerNestedInput>
  chats?: InstanceType<typeof ChatUpdateManyWithoutMembersNestedInput>
  offer?: InstanceType<typeof OfferUpdateOneWithoutTargetNestedInput>
  love?: InstanceType<typeof LoveUpdateOneWithoutPartnersNestedInput>
  ownedMessages?: InstanceType<typeof MessageUpdateManyWithoutAuthorNestedInput>
  ownedReviews?: InstanceType<typeof ReviewUpdateManyWithoutAuthorNestedInput>
  ownedLoves?: InstanceType<typeof LoveUpdateManyWithoutOwnerNestedInput>
  ownedOffers?: InstanceType<typeof OfferUpdateManyWithoutOwnerNestedInput>
  ownedChats?: InstanceType<typeof ChatUpdateManyWithoutOwnerNestedInput>
}
export declare class AccountUpdateWithoutChatsInput {
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>
  login?: InstanceType<typeof StringFieldUpdateOperationsInput>
  email?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  password?: InstanceType<typeof StringFieldUpdateOperationsInput>
  roles?: InstanceType<typeof AccountUpdaterolesInput>
  vkId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  vkAvatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  name?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  surname?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  gender?: InstanceType<typeof NullableEnumGenderFieldUpdateOperationsInput>
  birthday?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  avatar?: InstanceType<typeof UploadUpdateOneWithoutAccountsNestedInput>
  uploads?: InstanceType<typeof UploadUpdateManyWithoutOwnerNestedInput>
  offer?: InstanceType<typeof OfferUpdateOneWithoutTargetNestedInput>
  love?: InstanceType<typeof LoveUpdateOneWithoutPartnersNestedInput>
  ownedMessages?: InstanceType<typeof MessageUpdateManyWithoutAuthorNestedInput>
  ownedReviews?: InstanceType<typeof ReviewUpdateManyWithoutAuthorNestedInput>
  ownedLoves?: InstanceType<typeof LoveUpdateManyWithoutOwnerNestedInput>
  ownedOffers?: InstanceType<typeof OfferUpdateManyWithoutOwnerNestedInput>
  ownedChats?: InstanceType<typeof ChatUpdateManyWithoutOwnerNestedInput>
}
export declare class AccountUpdateWithoutLoveInput {
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>
  login?: InstanceType<typeof StringFieldUpdateOperationsInput>
  email?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  password?: InstanceType<typeof StringFieldUpdateOperationsInput>
  roles?: InstanceType<typeof AccountUpdaterolesInput>
  vkId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  vkAvatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  name?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  surname?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  gender?: InstanceType<typeof NullableEnumGenderFieldUpdateOperationsInput>
  birthday?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  avatar?: InstanceType<typeof UploadUpdateOneWithoutAccountsNestedInput>
  uploads?: InstanceType<typeof UploadUpdateManyWithoutOwnerNestedInput>
  chats?: InstanceType<typeof ChatUpdateManyWithoutMembersNestedInput>
  offer?: InstanceType<typeof OfferUpdateOneWithoutTargetNestedInput>
  ownedMessages?: InstanceType<typeof MessageUpdateManyWithoutAuthorNestedInput>
  ownedReviews?: InstanceType<typeof ReviewUpdateManyWithoutAuthorNestedInput>
  ownedLoves?: InstanceType<typeof LoveUpdateManyWithoutOwnerNestedInput>
  ownedOffers?: InstanceType<typeof OfferUpdateManyWithoutOwnerNestedInput>
  ownedChats?: InstanceType<typeof ChatUpdateManyWithoutOwnerNestedInput>
}
export declare class AccountUpdateWithoutOfferInput {
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>
  login?: InstanceType<typeof StringFieldUpdateOperationsInput>
  email?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  password?: InstanceType<typeof StringFieldUpdateOperationsInput>
  roles?: InstanceType<typeof AccountUpdaterolesInput>
  vkId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  vkAvatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  name?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  surname?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  gender?: InstanceType<typeof NullableEnumGenderFieldUpdateOperationsInput>
  birthday?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  avatar?: InstanceType<typeof UploadUpdateOneWithoutAccountsNestedInput>
  uploads?: InstanceType<typeof UploadUpdateManyWithoutOwnerNestedInput>
  chats?: InstanceType<typeof ChatUpdateManyWithoutMembersNestedInput>
  love?: InstanceType<typeof LoveUpdateOneWithoutPartnersNestedInput>
  ownedMessages?: InstanceType<typeof MessageUpdateManyWithoutAuthorNestedInput>
  ownedReviews?: InstanceType<typeof ReviewUpdateManyWithoutAuthorNestedInput>
  ownedLoves?: InstanceType<typeof LoveUpdateManyWithoutOwnerNestedInput>
  ownedOffers?: InstanceType<typeof OfferUpdateManyWithoutOwnerNestedInput>
  ownedChats?: InstanceType<typeof ChatUpdateManyWithoutOwnerNestedInput>
}
export declare class AccountUpdateWithoutOwnedChatsInput {
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>
  login?: InstanceType<typeof StringFieldUpdateOperationsInput>
  email?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  password?: InstanceType<typeof StringFieldUpdateOperationsInput>
  roles?: InstanceType<typeof AccountUpdaterolesInput>
  vkId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  vkAvatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  name?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  surname?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  gender?: InstanceType<typeof NullableEnumGenderFieldUpdateOperationsInput>
  birthday?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  avatar?: InstanceType<typeof UploadUpdateOneWithoutAccountsNestedInput>
  uploads?: InstanceType<typeof UploadUpdateManyWithoutOwnerNestedInput>
  chats?: InstanceType<typeof ChatUpdateManyWithoutMembersNestedInput>
  offer?: InstanceType<typeof OfferUpdateOneWithoutTargetNestedInput>
  love?: InstanceType<typeof LoveUpdateOneWithoutPartnersNestedInput>
  ownedMessages?: InstanceType<typeof MessageUpdateManyWithoutAuthorNestedInput>
  ownedReviews?: InstanceType<typeof ReviewUpdateManyWithoutAuthorNestedInput>
  ownedLoves?: InstanceType<typeof LoveUpdateManyWithoutOwnerNestedInput>
  ownedOffers?: InstanceType<typeof OfferUpdateManyWithoutOwnerNestedInput>
}
export declare class AccountUpdateWithoutOwnedLovesInput {
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>
  login?: InstanceType<typeof StringFieldUpdateOperationsInput>
  email?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  password?: InstanceType<typeof StringFieldUpdateOperationsInput>
  roles?: InstanceType<typeof AccountUpdaterolesInput>
  vkId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  vkAvatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  name?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  surname?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  gender?: InstanceType<typeof NullableEnumGenderFieldUpdateOperationsInput>
  birthday?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  avatar?: InstanceType<typeof UploadUpdateOneWithoutAccountsNestedInput>
  uploads?: InstanceType<typeof UploadUpdateManyWithoutOwnerNestedInput>
  chats?: InstanceType<typeof ChatUpdateManyWithoutMembersNestedInput>
  offer?: InstanceType<typeof OfferUpdateOneWithoutTargetNestedInput>
  love?: InstanceType<typeof LoveUpdateOneWithoutPartnersNestedInput>
  ownedMessages?: InstanceType<typeof MessageUpdateManyWithoutAuthorNestedInput>
  ownedReviews?: InstanceType<typeof ReviewUpdateManyWithoutAuthorNestedInput>
  ownedOffers?: InstanceType<typeof OfferUpdateManyWithoutOwnerNestedInput>
  ownedChats?: InstanceType<typeof ChatUpdateManyWithoutOwnerNestedInput>
}
export declare class AccountUpdateWithoutOwnedMessagesInput {
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>
  login?: InstanceType<typeof StringFieldUpdateOperationsInput>
  email?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  password?: InstanceType<typeof StringFieldUpdateOperationsInput>
  roles?: InstanceType<typeof AccountUpdaterolesInput>
  vkId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  vkAvatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  name?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  surname?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  gender?: InstanceType<typeof NullableEnumGenderFieldUpdateOperationsInput>
  birthday?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  avatar?: InstanceType<typeof UploadUpdateOneWithoutAccountsNestedInput>
  uploads?: InstanceType<typeof UploadUpdateManyWithoutOwnerNestedInput>
  chats?: InstanceType<typeof ChatUpdateManyWithoutMembersNestedInput>
  offer?: InstanceType<typeof OfferUpdateOneWithoutTargetNestedInput>
  love?: InstanceType<typeof LoveUpdateOneWithoutPartnersNestedInput>
  ownedReviews?: InstanceType<typeof ReviewUpdateManyWithoutAuthorNestedInput>
  ownedLoves?: InstanceType<typeof LoveUpdateManyWithoutOwnerNestedInput>
  ownedOffers?: InstanceType<typeof OfferUpdateManyWithoutOwnerNestedInput>
  ownedChats?: InstanceType<typeof ChatUpdateManyWithoutOwnerNestedInput>
}
export declare class AccountUpdateWithoutOwnedOffersInput {
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>
  login?: InstanceType<typeof StringFieldUpdateOperationsInput>
  email?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  password?: InstanceType<typeof StringFieldUpdateOperationsInput>
  roles?: InstanceType<typeof AccountUpdaterolesInput>
  vkId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  vkAvatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  name?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  surname?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  gender?: InstanceType<typeof NullableEnumGenderFieldUpdateOperationsInput>
  birthday?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  avatar?: InstanceType<typeof UploadUpdateOneWithoutAccountsNestedInput>
  uploads?: InstanceType<typeof UploadUpdateManyWithoutOwnerNestedInput>
  chats?: InstanceType<typeof ChatUpdateManyWithoutMembersNestedInput>
  offer?: InstanceType<typeof OfferUpdateOneWithoutTargetNestedInput>
  love?: InstanceType<typeof LoveUpdateOneWithoutPartnersNestedInput>
  ownedMessages?: InstanceType<typeof MessageUpdateManyWithoutAuthorNestedInput>
  ownedReviews?: InstanceType<typeof ReviewUpdateManyWithoutAuthorNestedInput>
  ownedLoves?: InstanceType<typeof LoveUpdateManyWithoutOwnerNestedInput>
  ownedChats?: InstanceType<typeof ChatUpdateManyWithoutOwnerNestedInput>
}
export declare class AccountUpdateWithoutOwnedReviewsInput {
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>
  login?: InstanceType<typeof StringFieldUpdateOperationsInput>
  email?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  password?: InstanceType<typeof StringFieldUpdateOperationsInput>
  roles?: InstanceType<typeof AccountUpdaterolesInput>
  vkId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  vkAvatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  name?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  surname?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  gender?: InstanceType<typeof NullableEnumGenderFieldUpdateOperationsInput>
  birthday?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  avatar?: InstanceType<typeof UploadUpdateOneWithoutAccountsNestedInput>
  uploads?: InstanceType<typeof UploadUpdateManyWithoutOwnerNestedInput>
  chats?: InstanceType<typeof ChatUpdateManyWithoutMembersNestedInput>
  offer?: InstanceType<typeof OfferUpdateOneWithoutTargetNestedInput>
  love?: InstanceType<typeof LoveUpdateOneWithoutPartnersNestedInput>
  ownedMessages?: InstanceType<typeof MessageUpdateManyWithoutAuthorNestedInput>
  ownedLoves?: InstanceType<typeof LoveUpdateManyWithoutOwnerNestedInput>
  ownedOffers?: InstanceType<typeof OfferUpdateManyWithoutOwnerNestedInput>
  ownedChats?: InstanceType<typeof ChatUpdateManyWithoutOwnerNestedInput>
}
export declare class AccountUpdateWithoutUploadsInput {
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>
  login?: InstanceType<typeof StringFieldUpdateOperationsInput>
  email?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  password?: InstanceType<typeof StringFieldUpdateOperationsInput>
  roles?: InstanceType<typeof AccountUpdaterolesInput>
  vkId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  vkAvatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  name?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  surname?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  gender?: InstanceType<typeof NullableEnumGenderFieldUpdateOperationsInput>
  birthday?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  avatar?: InstanceType<typeof UploadUpdateOneWithoutAccountsNestedInput>
  chats?: InstanceType<typeof ChatUpdateManyWithoutMembersNestedInput>
  offer?: InstanceType<typeof OfferUpdateOneWithoutTargetNestedInput>
  love?: InstanceType<typeof LoveUpdateOneWithoutPartnersNestedInput>
  ownedMessages?: InstanceType<typeof MessageUpdateManyWithoutAuthorNestedInput>
  ownedReviews?: InstanceType<typeof ReviewUpdateManyWithoutAuthorNestedInput>
  ownedLoves?: InstanceType<typeof LoveUpdateManyWithoutOwnerNestedInput>
  ownedOffers?: InstanceType<typeof OfferUpdateManyWithoutOwnerNestedInput>
  ownedChats?: InstanceType<typeof ChatUpdateManyWithoutOwnerNestedInput>
}
export declare class AccountUpdateInput {
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>
  login?: InstanceType<typeof StringFieldUpdateOperationsInput>
  email?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  password?: InstanceType<typeof StringFieldUpdateOperationsInput>
  roles?: InstanceType<typeof AccountUpdaterolesInput>
  vkId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  vkAvatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  name?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  surname?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  gender?: InstanceType<typeof NullableEnumGenderFieldUpdateOperationsInput>
  birthday?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  avatar?: InstanceType<typeof UploadUpdateOneWithoutAccountsNestedInput>
  uploads?: InstanceType<typeof UploadUpdateManyWithoutOwnerNestedInput>
  chats?: InstanceType<typeof ChatUpdateManyWithoutMembersNestedInput>
  offer?: InstanceType<typeof OfferUpdateOneWithoutTargetNestedInput>
  love?: InstanceType<typeof LoveUpdateOneWithoutPartnersNestedInput>
  ownedMessages?: InstanceType<typeof MessageUpdateManyWithoutAuthorNestedInput>
  ownedReviews?: InstanceType<typeof ReviewUpdateManyWithoutAuthorNestedInput>
  ownedLoves?: InstanceType<typeof LoveUpdateManyWithoutOwnerNestedInput>
  ownedOffers?: InstanceType<typeof OfferUpdateManyWithoutOwnerNestedInput>
  ownedChats?: InstanceType<typeof ChatUpdateManyWithoutOwnerNestedInput>
}
export declare class AccountUpdaterolesInput {
  set?: Array<keyof typeof Role>
  push?: Array<keyof typeof Role>
}
export declare class AccountUpsertWithWhereUniqueWithoutAvatarInput {
  where: Prisma.AtLeast<
    AccountWhereUniqueInput,
    'id' | 'login' | 'email' | 'vkId'
  >
  update: InstanceType<typeof AccountUpdateWithoutAvatarInput>
  create: InstanceType<typeof AccountCreateWithoutAvatarInput>
}
export declare class AccountUpsertWithWhereUniqueWithoutChatsInput {
  where: Prisma.AtLeast<
    AccountWhereUniqueInput,
    'id' | 'login' | 'email' | 'vkId'
  >
  update: InstanceType<typeof AccountUpdateWithoutChatsInput>
  create: InstanceType<typeof AccountCreateWithoutChatsInput>
}
export declare class AccountUpsertWithWhereUniqueWithoutLoveInput {
  where: Prisma.AtLeast<
    AccountWhereUniqueInput,
    'id' | 'login' | 'email' | 'vkId'
  >
  update: InstanceType<typeof AccountUpdateWithoutLoveInput>
  create: InstanceType<typeof AccountCreateWithoutLoveInput>
}
export declare class AccountUpsertWithoutOfferInput {
  update: InstanceType<typeof AccountUpdateWithoutOfferInput>
  create: InstanceType<typeof AccountCreateWithoutOfferInput>
  where?: InstanceType<typeof AccountWhereInput>
}
export declare class AccountUpsertWithoutOwnedChatsInput {
  update: InstanceType<typeof AccountUpdateWithoutOwnedChatsInput>
  create: InstanceType<typeof AccountCreateWithoutOwnedChatsInput>
  where?: InstanceType<typeof AccountWhereInput>
}
export declare class AccountUpsertWithoutOwnedLovesInput {
  update: InstanceType<typeof AccountUpdateWithoutOwnedLovesInput>
  create: InstanceType<typeof AccountCreateWithoutOwnedLovesInput>
  where?: InstanceType<typeof AccountWhereInput>
}
export declare class AccountUpsertWithoutOwnedMessagesInput {
  update: InstanceType<typeof AccountUpdateWithoutOwnedMessagesInput>
  create: InstanceType<typeof AccountCreateWithoutOwnedMessagesInput>
  where?: InstanceType<typeof AccountWhereInput>
}
export declare class AccountUpsertWithoutOwnedOffersInput {
  update: InstanceType<typeof AccountUpdateWithoutOwnedOffersInput>
  create: InstanceType<typeof AccountCreateWithoutOwnedOffersInput>
  where?: InstanceType<typeof AccountWhereInput>
}
export declare class AccountUpsertWithoutOwnedReviewsInput {
  update: InstanceType<typeof AccountUpdateWithoutOwnedReviewsInput>
  create: InstanceType<typeof AccountCreateWithoutOwnedReviewsInput>
  where?: InstanceType<typeof AccountWhereInput>
}
export declare class AccountUpsertWithoutUploadsInput {
  update: InstanceType<typeof AccountUpdateWithoutUploadsInput>
  create: InstanceType<typeof AccountCreateWithoutUploadsInput>
  where?: InstanceType<typeof AccountWhereInput>
}
export declare class AccountWhereUniqueInput {
  id?: string
  login?: string
  email?: string
  vkId?: string
  AND?: Array<AccountWhereInput>
  OR?: Array<AccountWhereInput>
  NOT?: Array<AccountWhereInput>
  password?: InstanceType<typeof StringFilter>
  roles?: InstanceType<typeof EnumRoleNullableListFilter>
  avatarId?: InstanceType<typeof StringNullableFilter>
  vkAvatar?: InstanceType<typeof StringNullableFilter>
  name?: InstanceType<typeof StringNullableFilter>
  surname?: InstanceType<typeof StringNullableFilter>
  gender?: InstanceType<typeof EnumGenderNullableFilter>
  birthday?: InstanceType<typeof DateTimeNullableFilter>
  loveId?: InstanceType<typeof StringNullableFilter>
  createdAt?: InstanceType<typeof DateTimeFilter>
  updatedAt?: InstanceType<typeof DateTimeFilter>
  avatar?: InstanceType<typeof UploadNullableRelationFilter>
  uploads?: InstanceType<typeof UploadListRelationFilter>
  chats?: InstanceType<typeof ChatListRelationFilter>
  offer?: InstanceType<typeof OfferNullableRelationFilter>
  love?: InstanceType<typeof LoveNullableRelationFilter>
  ownedMessages?: InstanceType<typeof MessageListRelationFilter>
  ownedReviews?: InstanceType<typeof ReviewListRelationFilter>
  ownedLoves?: InstanceType<typeof LoveListRelationFilter>
  ownedOffers?: InstanceType<typeof OfferListRelationFilter>
  ownedChats?: InstanceType<typeof ChatListRelationFilter>
}
export declare class AccountWhereInput {
  AND?: Array<AccountWhereInput>
  OR?: Array<AccountWhereInput>
  NOT?: Array<AccountWhereInput>
  id?: InstanceType<typeof StringFilter>
  login?: InstanceType<typeof StringFilter>
  email?: InstanceType<typeof StringNullableFilter>
  password?: InstanceType<typeof StringFilter>
  roles?: InstanceType<typeof EnumRoleNullableListFilter>
  avatarId?: InstanceType<typeof StringNullableFilter>
  vkId?: InstanceType<typeof StringNullableFilter>
  vkAvatar?: InstanceType<typeof StringNullableFilter>
  name?: InstanceType<typeof StringNullableFilter>
  surname?: InstanceType<typeof StringNullableFilter>
  gender?: InstanceType<typeof EnumGenderNullableFilter>
  birthday?: InstanceType<typeof DateTimeNullableFilter>
  loveId?: InstanceType<typeof StringNullableFilter>
  createdAt?: InstanceType<typeof DateTimeFilter>
  updatedAt?: InstanceType<typeof DateTimeFilter>
  avatar?: InstanceType<typeof UploadNullableRelationFilter>
  uploads?: InstanceType<typeof UploadListRelationFilter>
  chats?: InstanceType<typeof ChatListRelationFilter>
  offer?: InstanceType<typeof OfferNullableRelationFilter>
  love?: InstanceType<typeof LoveNullableRelationFilter>
  ownedMessages?: InstanceType<typeof MessageListRelationFilter>
  ownedReviews?: InstanceType<typeof ReviewListRelationFilter>
  ownedLoves?: InstanceType<typeof LoveListRelationFilter>
  ownedOffers?: InstanceType<typeof OfferListRelationFilter>
  ownedChats?: InstanceType<typeof ChatListRelationFilter>
}
export declare class Account {
  id: string
  login: string
  email: string | null
  password: string
  roles: Array<keyof typeof Role>
  avatarId: string | null
  vkId: string | null
  vkAvatar: string | null
  name: string | null
  surname: string | null
  gender: keyof typeof Gender | null
  birthday: Date | null
  loveId: string | null
  createdAt: Date
  updatedAt: Date
  avatar?: InstanceType<typeof Upload> | null
  uploads?: Array<Upload>
  chats?: Array<Chat>
  offer?: InstanceType<typeof Offer> | null
  love?: InstanceType<typeof Love> | null
  ownedMessages?: Array<Message>
  ownedReviews?: Array<Review>
  ownedLoves?: Array<Love>
  ownedOffers?: Array<Offer>
  ownedChats?: Array<Chat>
  _count?: InstanceType<typeof AccountCount>
}
export declare class AggregateAccount {
  _count?: InstanceType<typeof AccountCountAggregate>
  _min?: InstanceType<typeof AccountMinAggregate>
  _max?: InstanceType<typeof AccountMaxAggregate>
}
export declare class CreateManyAccountArgs {
  data: Array<AccountCreateManyInput>
  skipDuplicates?: boolean
}
export declare class CreateOneAccountArgs {
  data: InstanceType<typeof AccountCreateInput>
}
export declare class DeleteManyAccountArgs {
  where?: InstanceType<typeof AccountWhereInput>
}
export declare class DeleteOneAccountArgs {
  where: Prisma.AtLeast<
    AccountWhereUniqueInput,
    'id' | 'login' | 'email' | 'vkId'
  >
}
export declare class FindFirstAccountOrThrowArgs {
  where?: InstanceType<typeof AccountWhereInput>
  orderBy?: Array<AccountOrderByWithRelationInput>
  cursor?: Prisma.AtLeast<
    AccountWhereUniqueInput,
    'id' | 'login' | 'email' | 'vkId'
  >
  take?: number
  skip?: number
  distinct?: Array<keyof typeof AccountScalarFieldEnum>
}
export declare class FindFirstAccountArgs {
  where?: InstanceType<typeof AccountWhereInput>
  orderBy?: Array<AccountOrderByWithRelationInput>
  cursor?: Prisma.AtLeast<
    AccountWhereUniqueInput,
    'id' | 'login' | 'email' | 'vkId'
  >
  take?: number
  skip?: number
  distinct?: Array<keyof typeof AccountScalarFieldEnum>
}
export declare class FindManyAccountArgs {
  where?: InstanceType<typeof AccountWhereInput>
  orderBy?: Array<AccountOrderByWithRelationInput>
  cursor?: Prisma.AtLeast<
    AccountWhereUniqueInput,
    'id' | 'login' | 'email' | 'vkId'
  >
  take?: number
  skip?: number
  distinct?: Array<keyof typeof AccountScalarFieldEnum>
}
export declare class FindUniqueAccountOrThrowArgs {
  where: Prisma.AtLeast<
    AccountWhereUniqueInput,
    'id' | 'login' | 'email' | 'vkId'
  >
}
export declare class FindUniqueAccountArgs {
  where: Prisma.AtLeast<
    AccountWhereUniqueInput,
    'id' | 'login' | 'email' | 'vkId'
  >
}
export declare class UpdateManyAccountArgs {
  data: InstanceType<typeof AccountUpdateManyMutationInput>
  where?: InstanceType<typeof AccountWhereInput>
}
export declare class UpdateOneAccountArgs {
  data: InstanceType<typeof AccountUpdateInput>
  where: Prisma.AtLeast<
    AccountWhereUniqueInput,
    'id' | 'login' | 'email' | 'vkId'
  >
}
export declare class UpsertOneAccountArgs {
  where: Prisma.AtLeast<
    AccountWhereUniqueInput,
    'id' | 'login' | 'email' | 'vkId'
  >
  create: InstanceType<typeof AccountCreateInput>
  update: InstanceType<typeof AccountUpdateInput>
}
export declare class AggregateChat {
  _count?: InstanceType<typeof ChatCountAggregate>
  _min?: InstanceType<typeof ChatMinAggregate>
  _max?: InstanceType<typeof ChatMaxAggregate>
}
export declare class ChatAggregateArgs {
  where?: InstanceType<typeof ChatWhereInput>
  orderBy?: Array<ChatOrderByWithRelationInput>
  cursor?: Prisma.AtLeast<ChatWhereUniqueInput, 'id'>
  take?: number
  skip?: number
  _count?: InstanceType<typeof ChatCountAggregateInput>
  _min?: InstanceType<typeof ChatMinAggregateInput>
  _max?: InstanceType<typeof ChatMaxAggregateInput>
}
export declare class ChatCountAggregateInput {
  id?: true
  title?: true
  ownerId?: true
  picId?: true
  createdAt?: true
  updatedAt?: true
  _all?: true
}
export declare class ChatCountAggregate {
  id: number
  title: number
  ownerId: number
  picId: number
  createdAt: number
  updatedAt: number
  _all: number
}
export declare class ChatCountOrderByAggregateInput {
  id?: keyof typeof SortOrder
  title?: keyof typeof SortOrder
  ownerId?: keyof typeof SortOrder
  picId?: keyof typeof SortOrder
  createdAt?: keyof typeof SortOrder
  updatedAt?: keyof typeof SortOrder
}
export declare class ChatCount {
  messages?: number
  members?: number
}
export declare class ChatCreateManyOwnerInputEnvelope {
  data: Array<ChatCreateManyOwnerInput>
  skipDuplicates?: boolean
}
export declare class ChatCreateManyOwnerInput {
  id?: string
  title?: string
  picId: string
  createdAt?: Date | string
  updatedAt?: Date | string
}
export declare class ChatCreateManyPicInputEnvelope {
  data: Array<ChatCreateManyPicInput>
  skipDuplicates?: boolean
}
export declare class ChatCreateManyPicInput {
  id?: string
  title?: string
  ownerId: string
  createdAt?: Date | string
  updatedAt?: Date | string
}
export declare class ChatCreateManyInput {
  id?: string
  title?: string
  ownerId: string
  picId: string
  createdAt?: Date | string
  updatedAt?: Date | string
}
export declare class ChatCreateNestedManyWithoutMembersInput {
  create?: Array<ChatCreateWithoutMembersInput>
  connectOrCreate?: Array<ChatCreateOrConnectWithoutMembersInput>
  connect?: Array<Prisma.AtLeast<ChatWhereUniqueInput, 'id'>>
}
export declare class ChatCreateNestedManyWithoutOwnerInput {
  create?: Array<ChatCreateWithoutOwnerInput>
  connectOrCreate?: Array<ChatCreateOrConnectWithoutOwnerInput>
  createMany?: InstanceType<typeof ChatCreateManyOwnerInputEnvelope>
  connect?: Array<Prisma.AtLeast<ChatWhereUniqueInput, 'id'>>
}
export declare class ChatCreateNestedManyWithoutPicInput {
  create?: Array<ChatCreateWithoutPicInput>
  connectOrCreate?: Array<ChatCreateOrConnectWithoutPicInput>
  createMany?: InstanceType<typeof ChatCreateManyPicInputEnvelope>
  connect?: Array<Prisma.AtLeast<ChatWhereUniqueInput, 'id'>>
}
export declare class ChatCreateNestedOneWithoutMessagesInput {
  create?: InstanceType<typeof ChatCreateWithoutMessagesInput>
  connectOrCreate?: InstanceType<typeof ChatCreateOrConnectWithoutMessagesInput>
  connect?: Prisma.AtLeast<ChatWhereUniqueInput, 'id'>
}
export declare class ChatCreateOrConnectWithoutMembersInput {
  where: Prisma.AtLeast<ChatWhereUniqueInput, 'id'>
  create: InstanceType<typeof ChatCreateWithoutMembersInput>
}
export declare class ChatCreateOrConnectWithoutMessagesInput {
  where: Prisma.AtLeast<ChatWhereUniqueInput, 'id'>
  create: InstanceType<typeof ChatCreateWithoutMessagesInput>
}
export declare class ChatCreateOrConnectWithoutOwnerInput {
  where: Prisma.AtLeast<ChatWhereUniqueInput, 'id'>
  create: InstanceType<typeof ChatCreateWithoutOwnerInput>
}
export declare class ChatCreateOrConnectWithoutPicInput {
  where: Prisma.AtLeast<ChatWhereUniqueInput, 'id'>
  create: InstanceType<typeof ChatCreateWithoutPicInput>
}
export declare class ChatCreateWithoutMembersInput {
  id?: string
  title?: string
  createdAt?: Date | string
  updatedAt?: Date | string
  owner: InstanceType<typeof AccountCreateNestedOneWithoutOwnedChatsInput>
  pic: InstanceType<typeof UploadCreateNestedOneWithoutChatsInput>
  messages?: InstanceType<typeof MessageCreateNestedManyWithoutChatInput>
}
export declare class ChatCreateWithoutMessagesInput {
  id?: string
  title?: string
  createdAt?: Date | string
  updatedAt?: Date | string
  owner: InstanceType<typeof AccountCreateNestedOneWithoutOwnedChatsInput>
  pic: InstanceType<typeof UploadCreateNestedOneWithoutChatsInput>
  members?: InstanceType<typeof AccountCreateNestedManyWithoutChatsInput>
}
export declare class ChatCreateWithoutOwnerInput {
  id?: string
  title?: string
  createdAt?: Date | string
  updatedAt?: Date | string
  pic: InstanceType<typeof UploadCreateNestedOneWithoutChatsInput>
  messages?: InstanceType<typeof MessageCreateNestedManyWithoutChatInput>
  members?: InstanceType<typeof AccountCreateNestedManyWithoutChatsInput>
}
export declare class ChatCreateWithoutPicInput {
  id?: string
  title?: string
  createdAt?: Date | string
  updatedAt?: Date | string
  owner: InstanceType<typeof AccountCreateNestedOneWithoutOwnedChatsInput>
  messages?: InstanceType<typeof MessageCreateNestedManyWithoutChatInput>
  members?: InstanceType<typeof AccountCreateNestedManyWithoutChatsInput>
}
export declare class ChatCreateInput {
  id?: string
  title?: string
  createdAt?: Date | string
  updatedAt?: Date | string
  owner: InstanceType<typeof AccountCreateNestedOneWithoutOwnedChatsInput>
  pic: InstanceType<typeof UploadCreateNestedOneWithoutChatsInput>
  messages?: InstanceType<typeof MessageCreateNestedManyWithoutChatInput>
  members?: InstanceType<typeof AccountCreateNestedManyWithoutChatsInput>
}
export declare class ChatGroupByArgs {
  where?: InstanceType<typeof ChatWhereInput>
  orderBy?: Array<ChatOrderByWithAggregationInput>
  by: Array<keyof typeof ChatScalarFieldEnum>
  having?: InstanceType<typeof ChatScalarWhereWithAggregatesInput>
  take?: number
  skip?: number
  _count?: InstanceType<typeof ChatCountAggregateInput>
  _min?: InstanceType<typeof ChatMinAggregateInput>
  _max?: InstanceType<typeof ChatMaxAggregateInput>
}
export declare class ChatGroupBy {
  id: string
  title?: string
  ownerId: string
  picId: string
  createdAt: Date | string
  updatedAt: Date | string
  _count?: InstanceType<typeof ChatCountAggregate>
  _min?: InstanceType<typeof ChatMinAggregate>
  _max?: InstanceType<typeof ChatMaxAggregate>
}
export declare class ChatListRelationFilter {
  every?: InstanceType<typeof ChatWhereInput>
  some?: InstanceType<typeof ChatWhereInput>
  none?: InstanceType<typeof ChatWhereInput>
}
export declare class ChatMaxAggregateInput {
  id?: true
  title?: true
  ownerId?: true
  picId?: true
  createdAt?: true
  updatedAt?: true
}
export declare class ChatMaxAggregate {
  id?: string
  title?: string
  ownerId?: string
  picId?: string
  createdAt?: Date | string
  updatedAt?: Date | string
}
export declare class ChatMaxOrderByAggregateInput {
  id?: keyof typeof SortOrder
  title?: keyof typeof SortOrder
  ownerId?: keyof typeof SortOrder
  picId?: keyof typeof SortOrder
  createdAt?: keyof typeof SortOrder
  updatedAt?: keyof typeof SortOrder
}
export declare class ChatMinAggregateInput {
  id?: true
  title?: true
  ownerId?: true
  picId?: true
  createdAt?: true
  updatedAt?: true
}
export declare class ChatMinAggregate {
  id?: string
  title?: string
  ownerId?: string
  picId?: string
  createdAt?: Date | string
  updatedAt?: Date | string
}
export declare class ChatMinOrderByAggregateInput {
  id?: keyof typeof SortOrder
  title?: keyof typeof SortOrder
  ownerId?: keyof typeof SortOrder
  picId?: keyof typeof SortOrder
  createdAt?: keyof typeof SortOrder
  updatedAt?: keyof typeof SortOrder
}
export declare class ChatOrderByRelationAggregateInput {
  _count?: keyof typeof SortOrder
}
export declare class ChatOrderByWithAggregationInput {
  id?: keyof typeof SortOrder
  title?: InstanceType<typeof SortOrderInput>
  ownerId?: keyof typeof SortOrder
  picId?: keyof typeof SortOrder
  createdAt?: keyof typeof SortOrder
  updatedAt?: keyof typeof SortOrder
  _count?: InstanceType<typeof ChatCountOrderByAggregateInput>
  _max?: InstanceType<typeof ChatMaxOrderByAggregateInput>
  _min?: InstanceType<typeof ChatMinOrderByAggregateInput>
}
export declare class ChatOrderByWithRelationInput {
  id?: keyof typeof SortOrder
  title?: InstanceType<typeof SortOrderInput>
  ownerId?: keyof typeof SortOrder
  picId?: keyof typeof SortOrder
  createdAt?: keyof typeof SortOrder
  updatedAt?: keyof typeof SortOrder
  owner?: InstanceType<typeof AccountOrderByWithRelationInput>
  pic?: InstanceType<typeof UploadOrderByWithRelationInput>
  messages?: InstanceType<typeof MessageOrderByRelationAggregateInput>
  members?: InstanceType<typeof AccountOrderByRelationAggregateInput>
}
export declare class ChatRelationFilter {
  is?: InstanceType<typeof ChatWhereInput>
  isNot?: InstanceType<typeof ChatWhereInput>
}
export declare class ChatScalarWhereWithAggregatesInput {
  AND?: Array<ChatScalarWhereWithAggregatesInput>
  OR?: Array<ChatScalarWhereWithAggregatesInput>
  NOT?: Array<ChatScalarWhereWithAggregatesInput>
  id?: InstanceType<typeof StringWithAggregatesFilter>
  title?: InstanceType<typeof StringNullableWithAggregatesFilter>
  ownerId?: InstanceType<typeof StringWithAggregatesFilter>
  picId?: InstanceType<typeof StringWithAggregatesFilter>
  createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>
  updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>
}
export declare class ChatScalarWhereInput {
  AND?: Array<ChatScalarWhereInput>
  OR?: Array<ChatScalarWhereInput>
  NOT?: Array<ChatScalarWhereInput>
  id?: InstanceType<typeof StringFilter>
  title?: InstanceType<typeof StringNullableFilter>
  ownerId?: InstanceType<typeof StringFilter>
  picId?: InstanceType<typeof StringFilter>
  createdAt?: InstanceType<typeof DateTimeFilter>
  updatedAt?: InstanceType<typeof DateTimeFilter>
}
export declare class ChatUncheckedCreateNestedManyWithoutMembersInput {
  create?: Array<ChatCreateWithoutMembersInput>
  connectOrCreate?: Array<ChatCreateOrConnectWithoutMembersInput>
  connect?: Array<Prisma.AtLeast<ChatWhereUniqueInput, 'id'>>
}
export declare class ChatUncheckedCreateNestedManyWithoutOwnerInput {
  create?: Array<ChatCreateWithoutOwnerInput>
  connectOrCreate?: Array<ChatCreateOrConnectWithoutOwnerInput>
  createMany?: InstanceType<typeof ChatCreateManyOwnerInputEnvelope>
  connect?: Array<Prisma.AtLeast<ChatWhereUniqueInput, 'id'>>
}
export declare class ChatUncheckedCreateNestedManyWithoutPicInput {
  create?: Array<ChatCreateWithoutPicInput>
  connectOrCreate?: Array<ChatCreateOrConnectWithoutPicInput>
  createMany?: InstanceType<typeof ChatCreateManyPicInputEnvelope>
  connect?: Array<Prisma.AtLeast<ChatWhereUniqueInput, 'id'>>
}
export declare class ChatUncheckedCreateWithoutMembersInput {
  id?: string
  title?: string
  ownerId: string
  picId: string
  createdAt?: Date | string
  updatedAt?: Date | string
  messages?: InstanceType<
    typeof MessageUncheckedCreateNestedManyWithoutChatInput
  >
}
export declare class ChatUncheckedCreateWithoutMessagesInput {
  id?: string
  title?: string
  ownerId: string
  picId: string
  createdAt?: Date | string
  updatedAt?: Date | string
  members?: InstanceType<
    typeof AccountUncheckedCreateNestedManyWithoutChatsInput
  >
}
export declare class ChatUncheckedCreateWithoutOwnerInput {
  id?: string
  title?: string
  picId: string
  createdAt?: Date | string
  updatedAt?: Date | string
  messages?: InstanceType<
    typeof MessageUncheckedCreateNestedManyWithoutChatInput
  >
  members?: InstanceType<
    typeof AccountUncheckedCreateNestedManyWithoutChatsInput
  >
}
export declare class ChatUncheckedCreateWithoutPicInput {
  id?: string
  title?: string
  ownerId: string
  createdAt?: Date | string
  updatedAt?: Date | string
  messages?: InstanceType<
    typeof MessageUncheckedCreateNestedManyWithoutChatInput
  >
  members?: InstanceType<
    typeof AccountUncheckedCreateNestedManyWithoutChatsInput
  >
}
export declare class ChatUncheckedCreateInput {
  id?: string
  title?: string
  ownerId: string
  picId: string
  createdAt?: Date | string
  updatedAt?: Date | string
  messages?: InstanceType<
    typeof MessageUncheckedCreateNestedManyWithoutChatInput
  >
  members?: InstanceType<
    typeof AccountUncheckedCreateNestedManyWithoutChatsInput
  >
}
export declare class ChatUncheckedUpdateManyWithoutMembersNestedInput {
  create?: Array<ChatCreateWithoutMembersInput>
  connectOrCreate?: Array<ChatCreateOrConnectWithoutMembersInput>
  upsert?: Array<ChatUpsertWithWhereUniqueWithoutMembersInput>
  set?: Array<Prisma.AtLeast<ChatWhereUniqueInput, 'id'>>
  disconnect?: Array<Prisma.AtLeast<ChatWhereUniqueInput, 'id'>>
  delete?: Array<Prisma.AtLeast<ChatWhereUniqueInput, 'id'>>
  connect?: Array<Prisma.AtLeast<ChatWhereUniqueInput, 'id'>>
  update?: Array<ChatUpdateWithWhereUniqueWithoutMembersInput>
  updateMany?: Array<ChatUpdateManyWithWhereWithoutMembersInput>
  deleteMany?: Array<ChatScalarWhereInput>
}
export declare class ChatUncheckedUpdateManyWithoutMembersInput {
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>
  title?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  ownerId?: InstanceType<typeof StringFieldUpdateOperationsInput>
  picId?: InstanceType<typeof StringFieldUpdateOperationsInput>
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
}
export declare class ChatUncheckedUpdateManyWithoutOwnerNestedInput {
  create?: Array<ChatCreateWithoutOwnerInput>
  connectOrCreate?: Array<ChatCreateOrConnectWithoutOwnerInput>
  upsert?: Array<ChatUpsertWithWhereUniqueWithoutOwnerInput>
  createMany?: InstanceType<typeof ChatCreateManyOwnerInputEnvelope>
  set?: Array<Prisma.AtLeast<ChatWhereUniqueInput, 'id'>>
  disconnect?: Array<Prisma.AtLeast<ChatWhereUniqueInput, 'id'>>
  delete?: Array<Prisma.AtLeast<ChatWhereUniqueInput, 'id'>>
  connect?: Array<Prisma.AtLeast<ChatWhereUniqueInput, 'id'>>
  update?: Array<ChatUpdateWithWhereUniqueWithoutOwnerInput>
  updateMany?: Array<ChatUpdateManyWithWhereWithoutOwnerInput>
  deleteMany?: Array<ChatScalarWhereInput>
}
export declare class ChatUncheckedUpdateManyWithoutOwnerInput {
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>
  title?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  picId?: InstanceType<typeof StringFieldUpdateOperationsInput>
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
}
export declare class ChatUncheckedUpdateManyWithoutPicNestedInput {
  create?: Array<ChatCreateWithoutPicInput>
  connectOrCreate?: Array<ChatCreateOrConnectWithoutPicInput>
  upsert?: Array<ChatUpsertWithWhereUniqueWithoutPicInput>
  createMany?: InstanceType<typeof ChatCreateManyPicInputEnvelope>
  set?: Array<Prisma.AtLeast<ChatWhereUniqueInput, 'id'>>
  disconnect?: Array<Prisma.AtLeast<ChatWhereUniqueInput, 'id'>>
  delete?: Array<Prisma.AtLeast<ChatWhereUniqueInput, 'id'>>
  connect?: Array<Prisma.AtLeast<ChatWhereUniqueInput, 'id'>>
  update?: Array<ChatUpdateWithWhereUniqueWithoutPicInput>
  updateMany?: Array<ChatUpdateManyWithWhereWithoutPicInput>
  deleteMany?: Array<ChatScalarWhereInput>
}
export declare class ChatUncheckedUpdateManyWithoutPicInput {
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>
  title?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  ownerId?: InstanceType<typeof StringFieldUpdateOperationsInput>
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
}
export declare class ChatUncheckedUpdateManyInput {
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>
  title?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  ownerId?: InstanceType<typeof StringFieldUpdateOperationsInput>
  picId?: InstanceType<typeof StringFieldUpdateOperationsInput>
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
}
export declare class ChatUncheckedUpdateWithoutMembersInput {
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>
  title?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  ownerId?: InstanceType<typeof StringFieldUpdateOperationsInput>
  picId?: InstanceType<typeof StringFieldUpdateOperationsInput>
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  messages?: InstanceType<
    typeof MessageUncheckedUpdateManyWithoutChatNestedInput
  >
}
export declare class ChatUncheckedUpdateWithoutMessagesInput {
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>
  title?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  ownerId?: InstanceType<typeof StringFieldUpdateOperationsInput>
  picId?: InstanceType<typeof StringFieldUpdateOperationsInput>
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  members?: InstanceType<
    typeof AccountUncheckedUpdateManyWithoutChatsNestedInput
  >
}
export declare class ChatUncheckedUpdateWithoutOwnerInput {
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>
  title?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  picId?: InstanceType<typeof StringFieldUpdateOperationsInput>
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  messages?: InstanceType<
    typeof MessageUncheckedUpdateManyWithoutChatNestedInput
  >
  members?: InstanceType<
    typeof AccountUncheckedUpdateManyWithoutChatsNestedInput
  >
}
export declare class ChatUncheckedUpdateWithoutPicInput {
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>
  title?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  ownerId?: InstanceType<typeof StringFieldUpdateOperationsInput>
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  messages?: InstanceType<
    typeof MessageUncheckedUpdateManyWithoutChatNestedInput
  >
  members?: InstanceType<
    typeof AccountUncheckedUpdateManyWithoutChatsNestedInput
  >
}
export declare class ChatUncheckedUpdateInput {
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>
  title?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  ownerId?: InstanceType<typeof StringFieldUpdateOperationsInput>
  picId?: InstanceType<typeof StringFieldUpdateOperationsInput>
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  messages?: InstanceType<
    typeof MessageUncheckedUpdateManyWithoutChatNestedInput
  >
  members?: InstanceType<
    typeof AccountUncheckedUpdateManyWithoutChatsNestedInput
  >
}
export declare class ChatUpdateManyMutationInput {
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>
  title?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
}
export declare class ChatUpdateManyWithWhereWithoutMembersInput {
  where: InstanceType<typeof ChatScalarWhereInput>
  data: InstanceType<typeof ChatUpdateManyMutationInput>
}
export declare class ChatUpdateManyWithWhereWithoutOwnerInput {
  where: InstanceType<typeof ChatScalarWhereInput>
  data: InstanceType<typeof ChatUpdateManyMutationInput>
}
export declare class ChatUpdateManyWithWhereWithoutPicInput {
  where: InstanceType<typeof ChatScalarWhereInput>
  data: InstanceType<typeof ChatUpdateManyMutationInput>
}
export declare class ChatUpdateManyWithoutMembersNestedInput {
  create?: Array<ChatCreateWithoutMembersInput>
  connectOrCreate?: Array<ChatCreateOrConnectWithoutMembersInput>
  upsert?: Array<ChatUpsertWithWhereUniqueWithoutMembersInput>
  set?: Array<Prisma.AtLeast<ChatWhereUniqueInput, 'id'>>
  disconnect?: Array<Prisma.AtLeast<ChatWhereUniqueInput, 'id'>>
  delete?: Array<Prisma.AtLeast<ChatWhereUniqueInput, 'id'>>
  connect?: Array<Prisma.AtLeast<ChatWhereUniqueInput, 'id'>>
  update?: Array<ChatUpdateWithWhereUniqueWithoutMembersInput>
  updateMany?: Array<ChatUpdateManyWithWhereWithoutMembersInput>
  deleteMany?: Array<ChatScalarWhereInput>
}
export declare class ChatUpdateManyWithoutOwnerNestedInput {
  create?: Array<ChatCreateWithoutOwnerInput>
  connectOrCreate?: Array<ChatCreateOrConnectWithoutOwnerInput>
  upsert?: Array<ChatUpsertWithWhereUniqueWithoutOwnerInput>
  createMany?: InstanceType<typeof ChatCreateManyOwnerInputEnvelope>
  set?: Array<Prisma.AtLeast<ChatWhereUniqueInput, 'id'>>
  disconnect?: Array<Prisma.AtLeast<ChatWhereUniqueInput, 'id'>>
  delete?: Array<Prisma.AtLeast<ChatWhereUniqueInput, 'id'>>
  connect?: Array<Prisma.AtLeast<ChatWhereUniqueInput, 'id'>>
  update?: Array<ChatUpdateWithWhereUniqueWithoutOwnerInput>
  updateMany?: Array<ChatUpdateManyWithWhereWithoutOwnerInput>
  deleteMany?: Array<ChatScalarWhereInput>
}
export declare class ChatUpdateManyWithoutPicNestedInput {
  create?: Array<ChatCreateWithoutPicInput>
  connectOrCreate?: Array<ChatCreateOrConnectWithoutPicInput>
  upsert?: Array<ChatUpsertWithWhereUniqueWithoutPicInput>
  createMany?: InstanceType<typeof ChatCreateManyPicInputEnvelope>
  set?: Array<Prisma.AtLeast<ChatWhereUniqueInput, 'id'>>
  disconnect?: Array<Prisma.AtLeast<ChatWhereUniqueInput, 'id'>>
  delete?: Array<Prisma.AtLeast<ChatWhereUniqueInput, 'id'>>
  connect?: Array<Prisma.AtLeast<ChatWhereUniqueInput, 'id'>>
  update?: Array<ChatUpdateWithWhereUniqueWithoutPicInput>
  updateMany?: Array<ChatUpdateManyWithWhereWithoutPicInput>
  deleteMany?: Array<ChatScalarWhereInput>
}
export declare class ChatUpdateOneRequiredWithoutMessagesNestedInput {
  create?: InstanceType<typeof ChatCreateWithoutMessagesInput>
  connectOrCreate?: InstanceType<typeof ChatCreateOrConnectWithoutMessagesInput>
  upsert?: InstanceType<typeof ChatUpsertWithoutMessagesInput>
  connect?: Prisma.AtLeast<ChatWhereUniqueInput, 'id'>
  update?: InstanceType<typeof ChatUpdateToOneWithWhereWithoutMessagesInput>
}
export declare class ChatUpdateToOneWithWhereWithoutMessagesInput {
  where?: InstanceType<typeof ChatWhereInput>
  data: InstanceType<typeof ChatUpdateWithoutMessagesInput>
}
export declare class ChatUpdateWithWhereUniqueWithoutMembersInput {
  where: Prisma.AtLeast<ChatWhereUniqueInput, 'id'>
  data: InstanceType<typeof ChatUpdateWithoutMembersInput>
}
export declare class ChatUpdateWithWhereUniqueWithoutOwnerInput {
  where: Prisma.AtLeast<ChatWhereUniqueInput, 'id'>
  data: InstanceType<typeof ChatUpdateWithoutOwnerInput>
}
export declare class ChatUpdateWithWhereUniqueWithoutPicInput {
  where: Prisma.AtLeast<ChatWhereUniqueInput, 'id'>
  data: InstanceType<typeof ChatUpdateWithoutPicInput>
}
export declare class ChatUpdateWithoutMembersInput {
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>
  title?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  owner?: InstanceType<
    typeof AccountUpdateOneRequiredWithoutOwnedChatsNestedInput
  >
  pic?: InstanceType<typeof UploadUpdateOneRequiredWithoutChatsNestedInput>
  messages?: InstanceType<typeof MessageUpdateManyWithoutChatNestedInput>
}
export declare class ChatUpdateWithoutMessagesInput {
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>
  title?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  owner?: InstanceType<
    typeof AccountUpdateOneRequiredWithoutOwnedChatsNestedInput
  >
  pic?: InstanceType<typeof UploadUpdateOneRequiredWithoutChatsNestedInput>
  members?: InstanceType<typeof AccountUpdateManyWithoutChatsNestedInput>
}
export declare class ChatUpdateWithoutOwnerInput {
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>
  title?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  pic?: InstanceType<typeof UploadUpdateOneRequiredWithoutChatsNestedInput>
  messages?: InstanceType<typeof MessageUpdateManyWithoutChatNestedInput>
  members?: InstanceType<typeof AccountUpdateManyWithoutChatsNestedInput>
}
export declare class ChatUpdateWithoutPicInput {
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>
  title?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  owner?: InstanceType<
    typeof AccountUpdateOneRequiredWithoutOwnedChatsNestedInput
  >
  messages?: InstanceType<typeof MessageUpdateManyWithoutChatNestedInput>
  members?: InstanceType<typeof AccountUpdateManyWithoutChatsNestedInput>
}
export declare class ChatUpdateInput {
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>
  title?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  owner?: InstanceType<
    typeof AccountUpdateOneRequiredWithoutOwnedChatsNestedInput
  >
  pic?: InstanceType<typeof UploadUpdateOneRequiredWithoutChatsNestedInput>
  messages?: InstanceType<typeof MessageUpdateManyWithoutChatNestedInput>
  members?: InstanceType<typeof AccountUpdateManyWithoutChatsNestedInput>
}
export declare class ChatUpsertWithWhereUniqueWithoutMembersInput {
  where: Prisma.AtLeast<ChatWhereUniqueInput, 'id'>
  update: InstanceType<typeof ChatUpdateWithoutMembersInput>
  create: InstanceType<typeof ChatCreateWithoutMembersInput>
}
export declare class ChatUpsertWithWhereUniqueWithoutOwnerInput {
  where: Prisma.AtLeast<ChatWhereUniqueInput, 'id'>
  update: InstanceType<typeof ChatUpdateWithoutOwnerInput>
  create: InstanceType<typeof ChatCreateWithoutOwnerInput>
}
export declare class ChatUpsertWithWhereUniqueWithoutPicInput {
  where: Prisma.AtLeast<ChatWhereUniqueInput, 'id'>
  update: InstanceType<typeof ChatUpdateWithoutPicInput>
  create: InstanceType<typeof ChatCreateWithoutPicInput>
}
export declare class ChatUpsertWithoutMessagesInput {
  update: InstanceType<typeof ChatUpdateWithoutMessagesInput>
  create: InstanceType<typeof ChatCreateWithoutMessagesInput>
  where?: InstanceType<typeof ChatWhereInput>
}
export declare class ChatWhereUniqueInput {
  id?: string
  AND?: Array<ChatWhereInput>
  OR?: Array<ChatWhereInput>
  NOT?: Array<ChatWhereInput>
  title?: InstanceType<typeof StringNullableFilter>
  ownerId?: InstanceType<typeof StringFilter>
  picId?: InstanceType<typeof StringFilter>
  createdAt?: InstanceType<typeof DateTimeFilter>
  updatedAt?: InstanceType<typeof DateTimeFilter>
  owner?: InstanceType<typeof AccountRelationFilter>
  pic?: InstanceType<typeof UploadRelationFilter>
  messages?: InstanceType<typeof MessageListRelationFilter>
  members?: InstanceType<typeof AccountListRelationFilter>
}
export declare class ChatWhereInput {
  AND?: Array<ChatWhereInput>
  OR?: Array<ChatWhereInput>
  NOT?: Array<ChatWhereInput>
  id?: InstanceType<typeof StringFilter>
  title?: InstanceType<typeof StringNullableFilter>
  ownerId?: InstanceType<typeof StringFilter>
  picId?: InstanceType<typeof StringFilter>
  createdAt?: InstanceType<typeof DateTimeFilter>
  updatedAt?: InstanceType<typeof DateTimeFilter>
  owner?: InstanceType<typeof AccountRelationFilter>
  pic?: InstanceType<typeof UploadRelationFilter>
  messages?: InstanceType<typeof MessageListRelationFilter>
  members?: InstanceType<typeof AccountListRelationFilter>
}
export declare class Chat {
  id: string
  title: string | null
  ownerId: string
  picId: string
  createdAt: Date
  updatedAt: Date
  owner?: InstanceType<typeof Account>
  pic?: InstanceType<typeof Upload>
  messages?: Array<Message>
  members?: Array<Account>
  _count?: InstanceType<typeof ChatCount>
}
export declare class CreateManyChatArgs {
  data: Array<ChatCreateManyInput>
  skipDuplicates?: boolean
}
export declare class CreateOneChatArgs {
  data: InstanceType<typeof ChatCreateInput>
}
export declare class DeleteManyChatArgs {
  where?: InstanceType<typeof ChatWhereInput>
}
export declare class DeleteOneChatArgs {
  where: Prisma.AtLeast<ChatWhereUniqueInput, 'id'>
}
export declare class FindFirstChatOrThrowArgs {
  where?: InstanceType<typeof ChatWhereInput>
  orderBy?: Array<ChatOrderByWithRelationInput>
  cursor?: Prisma.AtLeast<ChatWhereUniqueInput, 'id'>
  take?: number
  skip?: number
  distinct?: Array<keyof typeof ChatScalarFieldEnum>
}
export declare class FindFirstChatArgs {
  where?: InstanceType<typeof ChatWhereInput>
  orderBy?: Array<ChatOrderByWithRelationInput>
  cursor?: Prisma.AtLeast<ChatWhereUniqueInput, 'id'>
  take?: number
  skip?: number
  distinct?: Array<keyof typeof ChatScalarFieldEnum>
}
export declare class FindManyChatArgs {
  where?: InstanceType<typeof ChatWhereInput>
  orderBy?: Array<ChatOrderByWithRelationInput>
  cursor?: Prisma.AtLeast<ChatWhereUniqueInput, 'id'>
  take?: number
  skip?: number
  distinct?: Array<keyof typeof ChatScalarFieldEnum>
}
export declare class FindUniqueChatOrThrowArgs {
  where: Prisma.AtLeast<ChatWhereUniqueInput, 'id'>
}
export declare class FindUniqueChatArgs {
  where: Prisma.AtLeast<ChatWhereUniqueInput, 'id'>
}
export declare class UpdateManyChatArgs {
  data: InstanceType<typeof ChatUpdateManyMutationInput>
  where?: InstanceType<typeof ChatWhereInput>
}
export declare class UpdateOneChatArgs {
  data: InstanceType<typeof ChatUpdateInput>
  where: Prisma.AtLeast<ChatWhereUniqueInput, 'id'>
}
export declare class UpsertOneChatArgs {
  where: Prisma.AtLeast<ChatWhereUniqueInput, 'id'>
  create: InstanceType<typeof ChatCreateInput>
  update: InstanceType<typeof ChatUpdateInput>
}
export declare class AggregateEvent {
  _count?: InstanceType<typeof EventCountAggregate>
  _min?: InstanceType<typeof EventMinAggregate>
  _max?: InstanceType<typeof EventMaxAggregate>
}
export declare class CreateManyEventArgs {
  data: Array<EventCreateManyInput>
  skipDuplicates?: boolean
}
export declare class CreateOneEventArgs {
  data: InstanceType<typeof EventCreateInput>
}
export declare class DeleteManyEventArgs {
  where?: InstanceType<typeof EventWhereInput>
}
export declare class DeleteOneEventArgs {
  where: Prisma.AtLeast<EventWhereUniqueInput, 'id'>
}
export declare class EventAggregateArgs {
  where?: InstanceType<typeof EventWhereInput>
  orderBy?: Array<EventOrderByWithRelationInput>
  cursor?: Prisma.AtLeast<EventWhereUniqueInput, 'id'>
  take?: number
  skip?: number
  _count?: InstanceType<typeof EventCountAggregateInput>
  _min?: InstanceType<typeof EventMinAggregateInput>
  _max?: InstanceType<typeof EventMaxAggregateInput>
}
export declare class EventCountAggregateInput {
  id?: true
  name?: true
  description?: true
  date?: true
  picId?: true
  createdAt?: true
  updatedAt?: true
  _all?: true
}
export declare class EventCountAggregate {
  id: number
  name: number
  description: number
  date: number
  picId: number
  createdAt: number
  updatedAt: number
  _all: number
}
export declare class EventCountOrderByAggregateInput {
  id?: keyof typeof SortOrder
  name?: keyof typeof SortOrder
  description?: keyof typeof SortOrder
  date?: keyof typeof SortOrder
  picId?: keyof typeof SortOrder
  createdAt?: keyof typeof SortOrder
  updatedAt?: keyof typeof SortOrder
}
export declare class EventCount {
  reviews?: number
  uploads?: number
}
export declare class EventCreateManyPicInputEnvelope {
  data: Array<EventCreateManyPicInput>
  skipDuplicates?: boolean
}
export declare class EventCreateManyPicInput {
  id?: string
  name: string
  description: string
  date?: Date | string
  createdAt?: Date | string
  updatedAt?: Date | string
}
export declare class EventCreateManyInput {
  id?: string
  name: string
  description: string
  date?: Date | string
  picId: string
  createdAt?: Date | string
  updatedAt?: Date | string
}
export declare class EventCreateNestedManyWithoutPicInput {
  create?: Array<EventCreateWithoutPicInput>
  connectOrCreate?: Array<EventCreateOrConnectWithoutPicInput>
  createMany?: InstanceType<typeof EventCreateManyPicInputEnvelope>
  connect?: Array<Prisma.AtLeast<EventWhereUniqueInput, 'id'>>
}
export declare class EventCreateNestedOneWithoutReviewsInput {
  create?: InstanceType<typeof EventCreateWithoutReviewsInput>
  connectOrCreate?: InstanceType<typeof EventCreateOrConnectWithoutReviewsInput>
  connect?: Prisma.AtLeast<EventWhereUniqueInput, 'id'>
}
export declare class EventCreateNestedOneWithoutUploadsInput {
  create?: InstanceType<typeof EventCreateWithoutUploadsInput>
  connectOrCreate?: InstanceType<typeof EventCreateOrConnectWithoutUploadsInput>
  connect?: Prisma.AtLeast<EventWhereUniqueInput, 'id'>
}
export declare class EventCreateOrConnectWithoutPicInput {
  where: Prisma.AtLeast<EventWhereUniqueInput, 'id'>
  create: InstanceType<typeof EventCreateWithoutPicInput>
}
export declare class EventCreateOrConnectWithoutReviewsInput {
  where: Prisma.AtLeast<EventWhereUniqueInput, 'id'>
  create: InstanceType<typeof EventCreateWithoutReviewsInput>
}
export declare class EventCreateOrConnectWithoutUploadsInput {
  where: Prisma.AtLeast<EventWhereUniqueInput, 'id'>
  create: InstanceType<typeof EventCreateWithoutUploadsInput>
}
export declare class EventCreateWithoutPicInput {
  id?: string
  name: string
  description: string
  date?: Date | string
  createdAt?: Date | string
  updatedAt?: Date | string
  reviews?: InstanceType<typeof ReviewCreateNestedManyWithoutEventInput>
  uploads?: InstanceType<typeof UploadCreateNestedManyWithoutEventInput>
}
export declare class EventCreateWithoutReviewsInput {
  id?: string
  name: string
  description: string
  date?: Date | string
  createdAt?: Date | string
  updatedAt?: Date | string
  pic: InstanceType<typeof UploadCreateNestedOneWithoutEventsInput>
  uploads?: InstanceType<typeof UploadCreateNestedManyWithoutEventInput>
}
export declare class EventCreateWithoutUploadsInput {
  id?: string
  name: string
  description: string
  date?: Date | string
  createdAt?: Date | string
  updatedAt?: Date | string
  pic: InstanceType<typeof UploadCreateNestedOneWithoutEventsInput>
  reviews?: InstanceType<typeof ReviewCreateNestedManyWithoutEventInput>
}
export declare class EventCreateInput {
  id?: string
  name: string
  description: string
  date?: Date | string
  createdAt?: Date | string
  updatedAt?: Date | string
  pic: InstanceType<typeof UploadCreateNestedOneWithoutEventsInput>
  reviews?: InstanceType<typeof ReviewCreateNestedManyWithoutEventInput>
  uploads?: InstanceType<typeof UploadCreateNestedManyWithoutEventInput>
}
export declare class EventGroupByArgs {
  where?: InstanceType<typeof EventWhereInput>
  orderBy?: Array<EventOrderByWithAggregationInput>
  by: Array<keyof typeof EventScalarFieldEnum>
  having?: InstanceType<typeof EventScalarWhereWithAggregatesInput>
  take?: number
  skip?: number
  _count?: InstanceType<typeof EventCountAggregateInput>
  _min?: InstanceType<typeof EventMinAggregateInput>
  _max?: InstanceType<typeof EventMaxAggregateInput>
}
export declare class EventGroupBy {
  id: string
  name: string
  description: string
  date?: Date | string
  picId: string
  createdAt: Date | string
  updatedAt: Date | string
  _count?: InstanceType<typeof EventCountAggregate>
  _min?: InstanceType<typeof EventMinAggregate>
  _max?: InstanceType<typeof EventMaxAggregate>
}
export declare class EventListRelationFilter {
  every?: InstanceType<typeof EventWhereInput>
  some?: InstanceType<typeof EventWhereInput>
  none?: InstanceType<typeof EventWhereInput>
}
export declare class EventMaxAggregateInput {
  id?: true
  name?: true
  description?: true
  date?: true
  picId?: true
  createdAt?: true
  updatedAt?: true
}
export declare class EventMaxAggregate {
  id?: string
  name?: string
  description?: string
  date?: Date | string
  picId?: string
  createdAt?: Date | string
  updatedAt?: Date | string
}
export declare class EventMaxOrderByAggregateInput {
  id?: keyof typeof SortOrder
  name?: keyof typeof SortOrder
  description?: keyof typeof SortOrder
  date?: keyof typeof SortOrder
  picId?: keyof typeof SortOrder
  createdAt?: keyof typeof SortOrder
  updatedAt?: keyof typeof SortOrder
}
export declare class EventMinAggregateInput {
  id?: true
  name?: true
  description?: true
  date?: true
  picId?: true
  createdAt?: true
  updatedAt?: true
}
export declare class EventMinAggregate {
  id?: string
  name?: string
  description?: string
  date?: Date | string
  picId?: string
  createdAt?: Date | string
  updatedAt?: Date | string
}
export declare class EventMinOrderByAggregateInput {
  id?: keyof typeof SortOrder
  name?: keyof typeof SortOrder
  description?: keyof typeof SortOrder
  date?: keyof typeof SortOrder
  picId?: keyof typeof SortOrder
  createdAt?: keyof typeof SortOrder
  updatedAt?: keyof typeof SortOrder
}
export declare class EventNullableRelationFilter {
  is?: InstanceType<typeof EventWhereInput>
  isNot?: InstanceType<typeof EventWhereInput>
}
export declare class EventOrderByRelationAggregateInput {
  _count?: keyof typeof SortOrder
}
export declare class EventOrderByWithAggregationInput {
  id?: keyof typeof SortOrder
  name?: keyof typeof SortOrder
  description?: keyof typeof SortOrder
  date?: InstanceType<typeof SortOrderInput>
  picId?: keyof typeof SortOrder
  createdAt?: keyof typeof SortOrder
  updatedAt?: keyof typeof SortOrder
  _count?: InstanceType<typeof EventCountOrderByAggregateInput>
  _max?: InstanceType<typeof EventMaxOrderByAggregateInput>
  _min?: InstanceType<typeof EventMinOrderByAggregateInput>
}
export declare class EventOrderByWithRelationInput {
  id?: keyof typeof SortOrder
  name?: keyof typeof SortOrder
  description?: keyof typeof SortOrder
  date?: InstanceType<typeof SortOrderInput>
  picId?: keyof typeof SortOrder
  createdAt?: keyof typeof SortOrder
  updatedAt?: keyof typeof SortOrder
  pic?: InstanceType<typeof UploadOrderByWithRelationInput>
  reviews?: InstanceType<typeof ReviewOrderByRelationAggregateInput>
  uploads?: InstanceType<typeof UploadOrderByRelationAggregateInput>
}
export declare class EventRelationFilter {
  is?: InstanceType<typeof EventWhereInput>
  isNot?: InstanceType<typeof EventWhereInput>
}
export declare class EventScalarWhereWithAggregatesInput {
  AND?: Array<EventScalarWhereWithAggregatesInput>
  OR?: Array<EventScalarWhereWithAggregatesInput>
  NOT?: Array<EventScalarWhereWithAggregatesInput>
  id?: InstanceType<typeof StringWithAggregatesFilter>
  name?: InstanceType<typeof StringWithAggregatesFilter>
  description?: InstanceType<typeof StringWithAggregatesFilter>
  date?: InstanceType<typeof DateTimeNullableWithAggregatesFilter>
  picId?: InstanceType<typeof StringWithAggregatesFilter>
  createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>
  updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>
}
export declare class EventScalarWhereInput {
  AND?: Array<EventScalarWhereInput>
  OR?: Array<EventScalarWhereInput>
  NOT?: Array<EventScalarWhereInput>
  id?: InstanceType<typeof StringFilter>
  name?: InstanceType<typeof StringFilter>
  description?: InstanceType<typeof StringFilter>
  date?: InstanceType<typeof DateTimeNullableFilter>
  picId?: InstanceType<typeof StringFilter>
  createdAt?: InstanceType<typeof DateTimeFilter>
  updatedAt?: InstanceType<typeof DateTimeFilter>
}
export declare class EventUncheckedCreateNestedManyWithoutPicInput {
  create?: Array<EventCreateWithoutPicInput>
  connectOrCreate?: Array<EventCreateOrConnectWithoutPicInput>
  createMany?: InstanceType<typeof EventCreateManyPicInputEnvelope>
  connect?: Array<Prisma.AtLeast<EventWhereUniqueInput, 'id'>>
}
export declare class EventUncheckedCreateWithoutPicInput {
  id?: string
  name: string
  description: string
  date?: Date | string
  createdAt?: Date | string
  updatedAt?: Date | string
  reviews?: InstanceType<
    typeof ReviewUncheckedCreateNestedManyWithoutEventInput
  >
  uploads?: InstanceType<
    typeof UploadUncheckedCreateNestedManyWithoutEventInput
  >
}
export declare class EventUncheckedCreateWithoutReviewsInput {
  id?: string
  name: string
  description: string
  date?: Date | string
  picId: string
  createdAt?: Date | string
  updatedAt?: Date | string
  uploads?: InstanceType<
    typeof UploadUncheckedCreateNestedManyWithoutEventInput
  >
}
export declare class EventUncheckedCreateWithoutUploadsInput {
  id?: string
  name: string
  description: string
  date?: Date | string
  picId: string
  createdAt?: Date | string
  updatedAt?: Date | string
  reviews?: InstanceType<
    typeof ReviewUncheckedCreateNestedManyWithoutEventInput
  >
}
export declare class EventUncheckedCreateInput {
  id?: string
  name: string
  description: string
  date?: Date | string
  picId: string
  createdAt?: Date | string
  updatedAt?: Date | string
  reviews?: InstanceType<
    typeof ReviewUncheckedCreateNestedManyWithoutEventInput
  >
  uploads?: InstanceType<
    typeof UploadUncheckedCreateNestedManyWithoutEventInput
  >
}
export declare class EventUncheckedUpdateManyWithoutPicNestedInput {
  create?: Array<EventCreateWithoutPicInput>
  connectOrCreate?: Array<EventCreateOrConnectWithoutPicInput>
  upsert?: Array<EventUpsertWithWhereUniqueWithoutPicInput>
  createMany?: InstanceType<typeof EventCreateManyPicInputEnvelope>
  set?: Array<Prisma.AtLeast<EventWhereUniqueInput, 'id'>>
  disconnect?: Array<Prisma.AtLeast<EventWhereUniqueInput, 'id'>>
  delete?: Array<Prisma.AtLeast<EventWhereUniqueInput, 'id'>>
  connect?: Array<Prisma.AtLeast<EventWhereUniqueInput, 'id'>>
  update?: Array<EventUpdateWithWhereUniqueWithoutPicInput>
  updateMany?: Array<EventUpdateManyWithWhereWithoutPicInput>
  deleteMany?: Array<EventScalarWhereInput>
}
export declare class EventUncheckedUpdateManyWithoutPicInput {
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>
  name?: InstanceType<typeof StringFieldUpdateOperationsInput>
  description?: InstanceType<typeof StringFieldUpdateOperationsInput>
  date?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
}
export declare class EventUncheckedUpdateManyInput {
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>
  name?: InstanceType<typeof StringFieldUpdateOperationsInput>
  description?: InstanceType<typeof StringFieldUpdateOperationsInput>
  date?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>
  picId?: InstanceType<typeof StringFieldUpdateOperationsInput>
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
}
export declare class EventUncheckedUpdateWithoutPicInput {
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>
  name?: InstanceType<typeof StringFieldUpdateOperationsInput>
  description?: InstanceType<typeof StringFieldUpdateOperationsInput>
  date?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  reviews?: InstanceType<
    typeof ReviewUncheckedUpdateManyWithoutEventNestedInput
  >
  uploads?: InstanceType<
    typeof UploadUncheckedUpdateManyWithoutEventNestedInput
  >
}
export declare class EventUncheckedUpdateWithoutReviewsInput {
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>
  name?: InstanceType<typeof StringFieldUpdateOperationsInput>
  description?: InstanceType<typeof StringFieldUpdateOperationsInput>
  date?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>
  picId?: InstanceType<typeof StringFieldUpdateOperationsInput>
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  uploads?: InstanceType<
    typeof UploadUncheckedUpdateManyWithoutEventNestedInput
  >
}
export declare class EventUncheckedUpdateWithoutUploadsInput {
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>
  name?: InstanceType<typeof StringFieldUpdateOperationsInput>
  description?: InstanceType<typeof StringFieldUpdateOperationsInput>
  date?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>
  picId?: InstanceType<typeof StringFieldUpdateOperationsInput>
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  reviews?: InstanceType<
    typeof ReviewUncheckedUpdateManyWithoutEventNestedInput
  >
}
export declare class EventUncheckedUpdateInput {
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>
  name?: InstanceType<typeof StringFieldUpdateOperationsInput>
  description?: InstanceType<typeof StringFieldUpdateOperationsInput>
  date?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>
  picId?: InstanceType<typeof StringFieldUpdateOperationsInput>
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  reviews?: InstanceType<
    typeof ReviewUncheckedUpdateManyWithoutEventNestedInput
  >
  uploads?: InstanceType<
    typeof UploadUncheckedUpdateManyWithoutEventNestedInput
  >
}
export declare class EventUpdateManyMutationInput {
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>
  name?: InstanceType<typeof StringFieldUpdateOperationsInput>
  description?: InstanceType<typeof StringFieldUpdateOperationsInput>
  date?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
}
export declare class EventUpdateManyWithWhereWithoutPicInput {
  where: InstanceType<typeof EventScalarWhereInput>
  data: InstanceType<typeof EventUpdateManyMutationInput>
}
export declare class EventUpdateManyWithoutPicNestedInput {
  create?: Array<EventCreateWithoutPicInput>
  connectOrCreate?: Array<EventCreateOrConnectWithoutPicInput>
  upsert?: Array<EventUpsertWithWhereUniqueWithoutPicInput>
  createMany?: InstanceType<typeof EventCreateManyPicInputEnvelope>
  set?: Array<Prisma.AtLeast<EventWhereUniqueInput, 'id'>>
  disconnect?: Array<Prisma.AtLeast<EventWhereUniqueInput, 'id'>>
  delete?: Array<Prisma.AtLeast<EventWhereUniqueInput, 'id'>>
  connect?: Array<Prisma.AtLeast<EventWhereUniqueInput, 'id'>>
  update?: Array<EventUpdateWithWhereUniqueWithoutPicInput>
  updateMany?: Array<EventUpdateManyWithWhereWithoutPicInput>
  deleteMany?: Array<EventScalarWhereInput>
}
export declare class EventUpdateOneRequiredWithoutReviewsNestedInput {
  create?: InstanceType<typeof EventCreateWithoutReviewsInput>
  connectOrCreate?: InstanceType<typeof EventCreateOrConnectWithoutReviewsInput>
  upsert?: InstanceType<typeof EventUpsertWithoutReviewsInput>
  connect?: Prisma.AtLeast<EventWhereUniqueInput, 'id'>
  update?: InstanceType<typeof EventUpdateToOneWithWhereWithoutReviewsInput>
}
export declare class EventUpdateOneWithoutUploadsNestedInput {
  create?: InstanceType<typeof EventCreateWithoutUploadsInput>
  connectOrCreate?: InstanceType<typeof EventCreateOrConnectWithoutUploadsInput>
  upsert?: InstanceType<typeof EventUpsertWithoutUploadsInput>
  disconnect?: InstanceType<typeof EventWhereInput>
  delete?: InstanceType<typeof EventWhereInput>
  connect?: Prisma.AtLeast<EventWhereUniqueInput, 'id'>
  update?: InstanceType<typeof EventUpdateToOneWithWhereWithoutUploadsInput>
}
export declare class EventUpdateToOneWithWhereWithoutReviewsInput {
  where?: InstanceType<typeof EventWhereInput>
  data: InstanceType<typeof EventUpdateWithoutReviewsInput>
}
export declare class EventUpdateToOneWithWhereWithoutUploadsInput {
  where?: InstanceType<typeof EventWhereInput>
  data: InstanceType<typeof EventUpdateWithoutUploadsInput>
}
export declare class EventUpdateWithWhereUniqueWithoutPicInput {
  where: Prisma.AtLeast<EventWhereUniqueInput, 'id'>
  data: InstanceType<typeof EventUpdateWithoutPicInput>
}
export declare class EventUpdateWithoutPicInput {
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>
  name?: InstanceType<typeof StringFieldUpdateOperationsInput>
  description?: InstanceType<typeof StringFieldUpdateOperationsInput>
  date?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  reviews?: InstanceType<typeof ReviewUpdateManyWithoutEventNestedInput>
  uploads?: InstanceType<typeof UploadUpdateManyWithoutEventNestedInput>
}
export declare class EventUpdateWithoutReviewsInput {
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>
  name?: InstanceType<typeof StringFieldUpdateOperationsInput>
  description?: InstanceType<typeof StringFieldUpdateOperationsInput>
  date?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  pic?: InstanceType<typeof UploadUpdateOneRequiredWithoutEventsNestedInput>
  uploads?: InstanceType<typeof UploadUpdateManyWithoutEventNestedInput>
}
export declare class EventUpdateWithoutUploadsInput {
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>
  name?: InstanceType<typeof StringFieldUpdateOperationsInput>
  description?: InstanceType<typeof StringFieldUpdateOperationsInput>
  date?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  pic?: InstanceType<typeof UploadUpdateOneRequiredWithoutEventsNestedInput>
  reviews?: InstanceType<typeof ReviewUpdateManyWithoutEventNestedInput>
}
export declare class EventUpdateInput {
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>
  name?: InstanceType<typeof StringFieldUpdateOperationsInput>
  description?: InstanceType<typeof StringFieldUpdateOperationsInput>
  date?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  pic?: InstanceType<typeof UploadUpdateOneRequiredWithoutEventsNestedInput>
  reviews?: InstanceType<typeof ReviewUpdateManyWithoutEventNestedInput>
  uploads?: InstanceType<typeof UploadUpdateManyWithoutEventNestedInput>
}
export declare class EventUpsertWithWhereUniqueWithoutPicInput {
  where: Prisma.AtLeast<EventWhereUniqueInput, 'id'>
  update: InstanceType<typeof EventUpdateWithoutPicInput>
  create: InstanceType<typeof EventCreateWithoutPicInput>
}
export declare class EventUpsertWithoutReviewsInput {
  update: InstanceType<typeof EventUpdateWithoutReviewsInput>
  create: InstanceType<typeof EventCreateWithoutReviewsInput>
  where?: InstanceType<typeof EventWhereInput>
}
export declare class EventUpsertWithoutUploadsInput {
  update: InstanceType<typeof EventUpdateWithoutUploadsInput>
  create: InstanceType<typeof EventCreateWithoutUploadsInput>
  where?: InstanceType<typeof EventWhereInput>
}
export declare class EventWhereUniqueInput {
  id?: string
  AND?: Array<EventWhereInput>
  OR?: Array<EventWhereInput>
  NOT?: Array<EventWhereInput>
  name?: InstanceType<typeof StringFilter>
  description?: InstanceType<typeof StringFilter>
  date?: InstanceType<typeof DateTimeNullableFilter>
  picId?: InstanceType<typeof StringFilter>
  createdAt?: InstanceType<typeof DateTimeFilter>
  updatedAt?: InstanceType<typeof DateTimeFilter>
  pic?: InstanceType<typeof UploadRelationFilter>
  reviews?: InstanceType<typeof ReviewListRelationFilter>
  uploads?: InstanceType<typeof UploadListRelationFilter>
}
export declare class EventWhereInput {
  AND?: Array<EventWhereInput>
  OR?: Array<EventWhereInput>
  NOT?: Array<EventWhereInput>
  id?: InstanceType<typeof StringFilter>
  name?: InstanceType<typeof StringFilter>
  description?: InstanceType<typeof StringFilter>
  date?: InstanceType<typeof DateTimeNullableFilter>
  picId?: InstanceType<typeof StringFilter>
  createdAt?: InstanceType<typeof DateTimeFilter>
  updatedAt?: InstanceType<typeof DateTimeFilter>
  pic?: InstanceType<typeof UploadRelationFilter>
  reviews?: InstanceType<typeof ReviewListRelationFilter>
  uploads?: InstanceType<typeof UploadListRelationFilter>
}
export declare class Event {
  id: string
  name: string
  description: string
  date: Date | null
  picId: string
  createdAt: Date
  updatedAt: Date
  pic?: InstanceType<typeof Upload>
  reviews?: Array<Review>
  uploads?: Array<Upload>
  _count?: InstanceType<typeof EventCount>
}
export declare class FindFirstEventOrThrowArgs {
  where?: InstanceType<typeof EventWhereInput>
  orderBy?: Array<EventOrderByWithRelationInput>
  cursor?: Prisma.AtLeast<EventWhereUniqueInput, 'id'>
  take?: number
  skip?: number
  distinct?: Array<keyof typeof EventScalarFieldEnum>
}
export declare class FindFirstEventArgs {
  where?: InstanceType<typeof EventWhereInput>
  orderBy?: Array<EventOrderByWithRelationInput>
  cursor?: Prisma.AtLeast<EventWhereUniqueInput, 'id'>
  take?: number
  skip?: number
  distinct?: Array<keyof typeof EventScalarFieldEnum>
}
export declare class FindManyEventArgs {
  where?: InstanceType<typeof EventWhereInput>
  orderBy?: Array<EventOrderByWithRelationInput>
  cursor?: Prisma.AtLeast<EventWhereUniqueInput, 'id'>
  take?: number
  skip?: number
  distinct?: Array<keyof typeof EventScalarFieldEnum>
}
export declare class FindUniqueEventOrThrowArgs {
  where: Prisma.AtLeast<EventWhereUniqueInput, 'id'>
}
export declare class FindUniqueEventArgs {
  where: Prisma.AtLeast<EventWhereUniqueInput, 'id'>
}
export declare class UpdateManyEventArgs {
  data: InstanceType<typeof EventUpdateManyMutationInput>
  where?: InstanceType<typeof EventWhereInput>
}
export declare class UpdateOneEventArgs {
  data: InstanceType<typeof EventUpdateInput>
  where: Prisma.AtLeast<EventWhereUniqueInput, 'id'>
}
export declare class UpsertOneEventArgs {
  where: Prisma.AtLeast<EventWhereUniqueInput, 'id'>
  create: InstanceType<typeof EventCreateInput>
  update: InstanceType<typeof EventUpdateInput>
}
export declare class AggregateLove {
  _count?: InstanceType<typeof LoveCountAggregate>
  _min?: InstanceType<typeof LoveMinAggregate>
  _max?: InstanceType<typeof LoveMaxAggregate>
}
export declare class CreateManyLoveArgs {
  data: Array<LoveCreateManyInput>
  skipDuplicates?: boolean
}
export declare class CreateOneLoveArgs {
  data: InstanceType<typeof LoveCreateInput>
}
export declare class DeleteManyLoveArgs {
  where?: InstanceType<typeof LoveWhereInput>
}
export declare class DeleteOneLoveArgs {
  where: Prisma.AtLeast<LoveWhereUniqueInput, 'id' | 'alias'>
}
export declare class FindFirstLoveOrThrowArgs {
  where?: InstanceType<typeof LoveWhereInput>
  orderBy?: Array<LoveOrderByWithRelationInput>
  cursor?: Prisma.AtLeast<LoveWhereUniqueInput, 'id' | 'alias'>
  take?: number
  skip?: number
  distinct?: Array<keyof typeof LoveScalarFieldEnum>
}
export declare class FindFirstLoveArgs {
  where?: InstanceType<typeof LoveWhereInput>
  orderBy?: Array<LoveOrderByWithRelationInput>
  cursor?: Prisma.AtLeast<LoveWhereUniqueInput, 'id' | 'alias'>
  take?: number
  skip?: number
  distinct?: Array<keyof typeof LoveScalarFieldEnum>
}
export declare class FindManyLoveArgs {
  where?: InstanceType<typeof LoveWhereInput>
  orderBy?: Array<LoveOrderByWithRelationInput>
  cursor?: Prisma.AtLeast<LoveWhereUniqueInput, 'id' | 'alias'>
  take?: number
  skip?: number
  distinct?: Array<keyof typeof LoveScalarFieldEnum>
}
export declare class FindUniqueLoveOrThrowArgs {
  where: Prisma.AtLeast<LoveWhereUniqueInput, 'id' | 'alias'>
}
export declare class FindUniqueLoveArgs {
  where: Prisma.AtLeast<LoveWhereUniqueInput, 'id' | 'alias'>
}
export declare class LoveAggregateArgs {
  where?: InstanceType<typeof LoveWhereInput>
  orderBy?: Array<LoveOrderByWithRelationInput>
  cursor?: Prisma.AtLeast<LoveWhereUniqueInput, 'id' | 'alias'>
  take?: number
  skip?: number
  _count?: InstanceType<typeof LoveCountAggregateInput>
  _min?: InstanceType<typeof LoveMinAggregateInput>
  _max?: InstanceType<typeof LoveMaxAggregateInput>
}
export declare class LoveCountAggregateInput {
  id?: true
  alias?: true
  name?: true
  isPrivate?: true
  ownerId?: true
  createdAt?: true
  updatedAt?: true
  _all?: true
}
export declare class LoveCountAggregate {
  id: number
  alias: number
  name: number
  isPrivate: number
  ownerId: number
  createdAt: number
  updatedAt: number
  _all: number
}
export declare class LoveCountOrderByAggregateInput {
  id?: keyof typeof SortOrder
  alias?: keyof typeof SortOrder
  name?: keyof typeof SortOrder
  isPrivate?: keyof typeof SortOrder
  ownerId?: keyof typeof SortOrder
  createdAt?: keyof typeof SortOrder
  updatedAt?: keyof typeof SortOrder
}
export declare class LoveCount {
  partners?: number
  Offer?: number
}
export declare class LoveCreateManyOwnerInputEnvelope {
  data: Array<LoveCreateManyOwnerInput>
  skipDuplicates?: boolean
}
export declare class LoveCreateManyOwnerInput {
  id?: string
  alias: string
  name: string
  isPrivate?: boolean
  createdAt?: Date | string
  updatedAt?: Date | string
}
export declare class LoveCreateManyInput {
  id?: string
  alias: string
  name: string
  isPrivate?: boolean
  ownerId: string
  createdAt?: Date | string
  updatedAt?: Date | string
}
export declare class LoveCreateNestedManyWithoutOwnerInput {
  create?: Array<LoveCreateWithoutOwnerInput>
  connectOrCreate?: Array<LoveCreateOrConnectWithoutOwnerInput>
  createMany?: InstanceType<typeof LoveCreateManyOwnerInputEnvelope>
  connect?: Array<Prisma.AtLeast<LoveWhereUniqueInput, 'id' | 'alias'>>
}
export declare class LoveCreateNestedOneWithoutOfferInput {
  create?: InstanceType<typeof LoveCreateWithoutOfferInput>
  connectOrCreate?: InstanceType<typeof LoveCreateOrConnectWithoutOfferInput>
  connect?: Prisma.AtLeast<LoveWhereUniqueInput, 'id' | 'alias'>
}
export declare class LoveCreateNestedOneWithoutPartnersInput {
  create?: InstanceType<typeof LoveCreateWithoutPartnersInput>
  connectOrCreate?: InstanceType<typeof LoveCreateOrConnectWithoutPartnersInput>
  connect?: Prisma.AtLeast<LoveWhereUniqueInput, 'id' | 'alias'>
}
export declare class LoveCreateOrConnectWithoutOfferInput {
  where: Prisma.AtLeast<LoveWhereUniqueInput, 'id' | 'alias'>
  create: InstanceType<typeof LoveCreateWithoutOfferInput>
}
export declare class LoveCreateOrConnectWithoutOwnerInput {
  where: Prisma.AtLeast<LoveWhereUniqueInput, 'id' | 'alias'>
  create: InstanceType<typeof LoveCreateWithoutOwnerInput>
}
export declare class LoveCreateOrConnectWithoutPartnersInput {
  where: Prisma.AtLeast<LoveWhereUniqueInput, 'id' | 'alias'>
  create: InstanceType<typeof LoveCreateWithoutPartnersInput>
}
export declare class LoveCreateWithoutOfferInput {
  id?: string
  alias: string
  name: string
  isPrivate?: boolean
  createdAt?: Date | string
  updatedAt?: Date | string
  partners?: InstanceType<typeof AccountCreateNestedManyWithoutLoveInput>
  owner: InstanceType<typeof AccountCreateNestedOneWithoutOwnedLovesInput>
}
export declare class LoveCreateWithoutOwnerInput {
  id?: string
  alias: string
  name: string
  isPrivate?: boolean
  createdAt?: Date | string
  updatedAt?: Date | string
  partners?: InstanceType<typeof AccountCreateNestedManyWithoutLoveInput>
  Offer?: InstanceType<typeof OfferCreateNestedManyWithoutLoveInput>
}
export declare class LoveCreateWithoutPartnersInput {
  id?: string
  alias: string
  name: string
  isPrivate?: boolean
  createdAt?: Date | string
  updatedAt?: Date | string
  owner: InstanceType<typeof AccountCreateNestedOneWithoutOwnedLovesInput>
  Offer?: InstanceType<typeof OfferCreateNestedManyWithoutLoveInput>
}
export declare class LoveCreateInput {
  id?: string
  alias: string
  name: string
  isPrivate?: boolean
  createdAt?: Date | string
  updatedAt?: Date | string
  partners?: InstanceType<typeof AccountCreateNestedManyWithoutLoveInput>
  owner: InstanceType<typeof AccountCreateNestedOneWithoutOwnedLovesInput>
  Offer?: InstanceType<typeof OfferCreateNestedManyWithoutLoveInput>
}
export declare class LoveGroupByArgs {
  where?: InstanceType<typeof LoveWhereInput>
  orderBy?: Array<LoveOrderByWithAggregationInput>
  by: Array<keyof typeof LoveScalarFieldEnum>
  having?: InstanceType<typeof LoveScalarWhereWithAggregatesInput>
  take?: number
  skip?: number
  _count?: InstanceType<typeof LoveCountAggregateInput>
  _min?: InstanceType<typeof LoveMinAggregateInput>
  _max?: InstanceType<typeof LoveMaxAggregateInput>
}
export declare class LoveGroupBy {
  id: string
  alias: string
  name: string
  isPrivate: boolean
  ownerId: string
  createdAt: Date | string
  updatedAt: Date | string
  _count?: InstanceType<typeof LoveCountAggregate>
  _min?: InstanceType<typeof LoveMinAggregate>
  _max?: InstanceType<typeof LoveMaxAggregate>
}
export declare class LoveListRelationFilter {
  every?: InstanceType<typeof LoveWhereInput>
  some?: InstanceType<typeof LoveWhereInput>
  none?: InstanceType<typeof LoveWhereInput>
}
export declare class LoveMaxAggregateInput {
  id?: true
  alias?: true
  name?: true
  isPrivate?: true
  ownerId?: true
  createdAt?: true
  updatedAt?: true
}
export declare class LoveMaxAggregate {
  id?: string
  alias?: string
  name?: string
  isPrivate?: boolean
  ownerId?: string
  createdAt?: Date | string
  updatedAt?: Date | string
}
export declare class LoveMaxOrderByAggregateInput {
  id?: keyof typeof SortOrder
  alias?: keyof typeof SortOrder
  name?: keyof typeof SortOrder
  isPrivate?: keyof typeof SortOrder
  ownerId?: keyof typeof SortOrder
  createdAt?: keyof typeof SortOrder
  updatedAt?: keyof typeof SortOrder
}
export declare class LoveMinAggregateInput {
  id?: true
  alias?: true
  name?: true
  isPrivate?: true
  ownerId?: true
  createdAt?: true
  updatedAt?: true
}
export declare class LoveMinAggregate {
  id?: string
  alias?: string
  name?: string
  isPrivate?: boolean
  ownerId?: string
  createdAt?: Date | string
  updatedAt?: Date | string
}
export declare class LoveMinOrderByAggregateInput {
  id?: keyof typeof SortOrder
  alias?: keyof typeof SortOrder
  name?: keyof typeof SortOrder
  isPrivate?: keyof typeof SortOrder
  ownerId?: keyof typeof SortOrder
  createdAt?: keyof typeof SortOrder
  updatedAt?: keyof typeof SortOrder
}
export declare class LoveNullableRelationFilter {
  is?: InstanceType<typeof LoveWhereInput>
  isNot?: InstanceType<typeof LoveWhereInput>
}
export declare class LoveOrderByRelationAggregateInput {
  _count?: keyof typeof SortOrder
}
export declare class LoveOrderByWithAggregationInput {
  id?: keyof typeof SortOrder
  alias?: keyof typeof SortOrder
  name?: keyof typeof SortOrder
  isPrivate?: keyof typeof SortOrder
  ownerId?: keyof typeof SortOrder
  createdAt?: keyof typeof SortOrder
  updatedAt?: keyof typeof SortOrder
  _count?: InstanceType<typeof LoveCountOrderByAggregateInput>
  _max?: InstanceType<typeof LoveMaxOrderByAggregateInput>
  _min?: InstanceType<typeof LoveMinOrderByAggregateInput>
}
export declare class LoveOrderByWithRelationInput {
  id?: keyof typeof SortOrder
  alias?: keyof typeof SortOrder
  name?: keyof typeof SortOrder
  isPrivate?: keyof typeof SortOrder
  ownerId?: keyof typeof SortOrder
  createdAt?: keyof typeof SortOrder
  updatedAt?: keyof typeof SortOrder
  partners?: InstanceType<typeof AccountOrderByRelationAggregateInput>
  owner?: InstanceType<typeof AccountOrderByWithRelationInput>
  Offer?: InstanceType<typeof OfferOrderByRelationAggregateInput>
}
export declare class LoveRelationFilter {
  is?: InstanceType<typeof LoveWhereInput>
  isNot?: InstanceType<typeof LoveWhereInput>
}
export declare class LoveScalarWhereWithAggregatesInput {
  AND?: Array<LoveScalarWhereWithAggregatesInput>
  OR?: Array<LoveScalarWhereWithAggregatesInput>
  NOT?: Array<LoveScalarWhereWithAggregatesInput>
  id?: InstanceType<typeof StringWithAggregatesFilter>
  alias?: InstanceType<typeof StringWithAggregatesFilter>
  name?: InstanceType<typeof StringWithAggregatesFilter>
  isPrivate?: InstanceType<typeof BoolWithAggregatesFilter>
  ownerId?: InstanceType<typeof StringWithAggregatesFilter>
  createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>
  updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>
}
export declare class LoveScalarWhereInput {
  AND?: Array<LoveScalarWhereInput>
  OR?: Array<LoveScalarWhereInput>
  NOT?: Array<LoveScalarWhereInput>
  id?: InstanceType<typeof StringFilter>
  alias?: InstanceType<typeof StringFilter>
  name?: InstanceType<typeof StringFilter>
  isPrivate?: InstanceType<typeof BoolFilter>
  ownerId?: InstanceType<typeof StringFilter>
  createdAt?: InstanceType<typeof DateTimeFilter>
  updatedAt?: InstanceType<typeof DateTimeFilter>
}
export declare class LoveUncheckedCreateNestedManyWithoutOwnerInput {
  create?: Array<LoveCreateWithoutOwnerInput>
  connectOrCreate?: Array<LoveCreateOrConnectWithoutOwnerInput>
  createMany?: InstanceType<typeof LoveCreateManyOwnerInputEnvelope>
  connect?: Array<Prisma.AtLeast<LoveWhereUniqueInput, 'id' | 'alias'>>
}
export declare class LoveUncheckedCreateWithoutOfferInput {
  id?: string
  alias: string
  name: string
  isPrivate?: boolean
  ownerId: string
  createdAt?: Date | string
  updatedAt?: Date | string
  partners?: InstanceType<
    typeof AccountUncheckedCreateNestedManyWithoutLoveInput
  >
}
export declare class LoveUncheckedCreateWithoutOwnerInput {
  id?: string
  alias: string
  name: string
  isPrivate?: boolean
  createdAt?: Date | string
  updatedAt?: Date | string
  partners?: InstanceType<
    typeof AccountUncheckedCreateNestedManyWithoutLoveInput
  >
  Offer?: InstanceType<typeof OfferUncheckedCreateNestedManyWithoutLoveInput>
}
export declare class LoveUncheckedCreateWithoutPartnersInput {
  id?: string
  alias: string
  name: string
  isPrivate?: boolean
  ownerId: string
  createdAt?: Date | string
  updatedAt?: Date | string
  Offer?: InstanceType<typeof OfferUncheckedCreateNestedManyWithoutLoveInput>
}
export declare class LoveUncheckedCreateInput {
  id?: string
  alias: string
  name: string
  isPrivate?: boolean
  ownerId: string
  createdAt?: Date | string
  updatedAt?: Date | string
  partners?: InstanceType<
    typeof AccountUncheckedCreateNestedManyWithoutLoveInput
  >
  Offer?: InstanceType<typeof OfferUncheckedCreateNestedManyWithoutLoveInput>
}
export declare class LoveUncheckedUpdateManyWithoutOwnerNestedInput {
  create?: Array<LoveCreateWithoutOwnerInput>
  connectOrCreate?: Array<LoveCreateOrConnectWithoutOwnerInput>
  upsert?: Array<LoveUpsertWithWhereUniqueWithoutOwnerInput>
  createMany?: InstanceType<typeof LoveCreateManyOwnerInputEnvelope>
  set?: Array<Prisma.AtLeast<LoveWhereUniqueInput, 'id' | 'alias'>>
  disconnect?: Array<Prisma.AtLeast<LoveWhereUniqueInput, 'id' | 'alias'>>
  delete?: Array<Prisma.AtLeast<LoveWhereUniqueInput, 'id' | 'alias'>>
  connect?: Array<Prisma.AtLeast<LoveWhereUniqueInput, 'id' | 'alias'>>
  update?: Array<LoveUpdateWithWhereUniqueWithoutOwnerInput>
  updateMany?: Array<LoveUpdateManyWithWhereWithoutOwnerInput>
  deleteMany?: Array<LoveScalarWhereInput>
}
export declare class LoveUncheckedUpdateManyWithoutOwnerInput {
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>
  alias?: InstanceType<typeof StringFieldUpdateOperationsInput>
  name?: InstanceType<typeof StringFieldUpdateOperationsInput>
  isPrivate?: InstanceType<typeof BoolFieldUpdateOperationsInput>
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
}
export declare class LoveUncheckedUpdateManyInput {
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>
  alias?: InstanceType<typeof StringFieldUpdateOperationsInput>
  name?: InstanceType<typeof StringFieldUpdateOperationsInput>
  isPrivate?: InstanceType<typeof BoolFieldUpdateOperationsInput>
  ownerId?: InstanceType<typeof StringFieldUpdateOperationsInput>
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
}
export declare class LoveUncheckedUpdateWithoutOfferInput {
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>
  alias?: InstanceType<typeof StringFieldUpdateOperationsInput>
  name?: InstanceType<typeof StringFieldUpdateOperationsInput>
  isPrivate?: InstanceType<typeof BoolFieldUpdateOperationsInput>
  ownerId?: InstanceType<typeof StringFieldUpdateOperationsInput>
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  partners?: InstanceType<
    typeof AccountUncheckedUpdateManyWithoutLoveNestedInput
  >
}
export declare class LoveUncheckedUpdateWithoutOwnerInput {
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>
  alias?: InstanceType<typeof StringFieldUpdateOperationsInput>
  name?: InstanceType<typeof StringFieldUpdateOperationsInput>
  isPrivate?: InstanceType<typeof BoolFieldUpdateOperationsInput>
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  partners?: InstanceType<
    typeof AccountUncheckedUpdateManyWithoutLoveNestedInput
  >
  Offer?: InstanceType<typeof OfferUncheckedUpdateManyWithoutLoveNestedInput>
}
export declare class LoveUncheckedUpdateWithoutPartnersInput {
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>
  alias?: InstanceType<typeof StringFieldUpdateOperationsInput>
  name?: InstanceType<typeof StringFieldUpdateOperationsInput>
  isPrivate?: InstanceType<typeof BoolFieldUpdateOperationsInput>
  ownerId?: InstanceType<typeof StringFieldUpdateOperationsInput>
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  Offer?: InstanceType<typeof OfferUncheckedUpdateManyWithoutLoveNestedInput>
}
export declare class LoveUncheckedUpdateInput {
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>
  alias?: InstanceType<typeof StringFieldUpdateOperationsInput>
  name?: InstanceType<typeof StringFieldUpdateOperationsInput>
  isPrivate?: InstanceType<typeof BoolFieldUpdateOperationsInput>
  ownerId?: InstanceType<typeof StringFieldUpdateOperationsInput>
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  partners?: InstanceType<
    typeof AccountUncheckedUpdateManyWithoutLoveNestedInput
  >
  Offer?: InstanceType<typeof OfferUncheckedUpdateManyWithoutLoveNestedInput>
}
export declare class LoveUpdateManyMutationInput {
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>
  alias?: InstanceType<typeof StringFieldUpdateOperationsInput>
  name?: InstanceType<typeof StringFieldUpdateOperationsInput>
  isPrivate?: InstanceType<typeof BoolFieldUpdateOperationsInput>
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
}
export declare class LoveUpdateManyWithWhereWithoutOwnerInput {
  where: InstanceType<typeof LoveScalarWhereInput>
  data: InstanceType<typeof LoveUpdateManyMutationInput>
}
export declare class LoveUpdateManyWithoutOwnerNestedInput {
  create?: Array<LoveCreateWithoutOwnerInput>
  connectOrCreate?: Array<LoveCreateOrConnectWithoutOwnerInput>
  upsert?: Array<LoveUpsertWithWhereUniqueWithoutOwnerInput>
  createMany?: InstanceType<typeof LoveCreateManyOwnerInputEnvelope>
  set?: Array<Prisma.AtLeast<LoveWhereUniqueInput, 'id' | 'alias'>>
  disconnect?: Array<Prisma.AtLeast<LoveWhereUniqueInput, 'id' | 'alias'>>
  delete?: Array<Prisma.AtLeast<LoveWhereUniqueInput, 'id' | 'alias'>>
  connect?: Array<Prisma.AtLeast<LoveWhereUniqueInput, 'id' | 'alias'>>
  update?: Array<LoveUpdateWithWhereUniqueWithoutOwnerInput>
  updateMany?: Array<LoveUpdateManyWithWhereWithoutOwnerInput>
  deleteMany?: Array<LoveScalarWhereInput>
}
export declare class LoveUpdateOneRequiredWithoutOfferNestedInput {
  create?: InstanceType<typeof LoveCreateWithoutOfferInput>
  connectOrCreate?: InstanceType<typeof LoveCreateOrConnectWithoutOfferInput>
  upsert?: InstanceType<typeof LoveUpsertWithoutOfferInput>
  connect?: Prisma.AtLeast<LoveWhereUniqueInput, 'id' | 'alias'>
  update?: InstanceType<typeof LoveUpdateToOneWithWhereWithoutOfferInput>
}
export declare class LoveUpdateOneWithoutPartnersNestedInput {
  create?: InstanceType<typeof LoveCreateWithoutPartnersInput>
  connectOrCreate?: InstanceType<typeof LoveCreateOrConnectWithoutPartnersInput>
  upsert?: InstanceType<typeof LoveUpsertWithoutPartnersInput>
  disconnect?: InstanceType<typeof LoveWhereInput>
  delete?: InstanceType<typeof LoveWhereInput>
  connect?: Prisma.AtLeast<LoveWhereUniqueInput, 'id' | 'alias'>
  update?: InstanceType<typeof LoveUpdateToOneWithWhereWithoutPartnersInput>
}
export declare class LoveUpdateToOneWithWhereWithoutOfferInput {
  where?: InstanceType<typeof LoveWhereInput>
  data: InstanceType<typeof LoveUpdateWithoutOfferInput>
}
export declare class LoveUpdateToOneWithWhereWithoutPartnersInput {
  where?: InstanceType<typeof LoveWhereInput>
  data: InstanceType<typeof LoveUpdateWithoutPartnersInput>
}
export declare class LoveUpdateWithWhereUniqueWithoutOwnerInput {
  where: Prisma.AtLeast<LoveWhereUniqueInput, 'id' | 'alias'>
  data: InstanceType<typeof LoveUpdateWithoutOwnerInput>
}
export declare class LoveUpdateWithoutOfferInput {
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>
  alias?: InstanceType<typeof StringFieldUpdateOperationsInput>
  name?: InstanceType<typeof StringFieldUpdateOperationsInput>
  isPrivate?: InstanceType<typeof BoolFieldUpdateOperationsInput>
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  partners?: InstanceType<typeof AccountUpdateManyWithoutLoveNestedInput>
  owner?: InstanceType<
    typeof AccountUpdateOneRequiredWithoutOwnedLovesNestedInput
  >
}
export declare class LoveUpdateWithoutOwnerInput {
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>
  alias?: InstanceType<typeof StringFieldUpdateOperationsInput>
  name?: InstanceType<typeof StringFieldUpdateOperationsInput>
  isPrivate?: InstanceType<typeof BoolFieldUpdateOperationsInput>
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  partners?: InstanceType<typeof AccountUpdateManyWithoutLoveNestedInput>
  Offer?: InstanceType<typeof OfferUpdateManyWithoutLoveNestedInput>
}
export declare class LoveUpdateWithoutPartnersInput {
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>
  alias?: InstanceType<typeof StringFieldUpdateOperationsInput>
  name?: InstanceType<typeof StringFieldUpdateOperationsInput>
  isPrivate?: InstanceType<typeof BoolFieldUpdateOperationsInput>
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  owner?: InstanceType<
    typeof AccountUpdateOneRequiredWithoutOwnedLovesNestedInput
  >
  Offer?: InstanceType<typeof OfferUpdateManyWithoutLoveNestedInput>
}
export declare class LoveUpdateInput {
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>
  alias?: InstanceType<typeof StringFieldUpdateOperationsInput>
  name?: InstanceType<typeof StringFieldUpdateOperationsInput>
  isPrivate?: InstanceType<typeof BoolFieldUpdateOperationsInput>
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  partners?: InstanceType<typeof AccountUpdateManyWithoutLoveNestedInput>
  owner?: InstanceType<
    typeof AccountUpdateOneRequiredWithoutOwnedLovesNestedInput
  >
  Offer?: InstanceType<typeof OfferUpdateManyWithoutLoveNestedInput>
}
export declare class LoveUpsertWithWhereUniqueWithoutOwnerInput {
  where: Prisma.AtLeast<LoveWhereUniqueInput, 'id' | 'alias'>
  update: InstanceType<typeof LoveUpdateWithoutOwnerInput>
  create: InstanceType<typeof LoveCreateWithoutOwnerInput>
}
export declare class LoveUpsertWithoutOfferInput {
  update: InstanceType<typeof LoveUpdateWithoutOfferInput>
  create: InstanceType<typeof LoveCreateWithoutOfferInput>
  where?: InstanceType<typeof LoveWhereInput>
}
export declare class LoveUpsertWithoutPartnersInput {
  update: InstanceType<typeof LoveUpdateWithoutPartnersInput>
  create: InstanceType<typeof LoveCreateWithoutPartnersInput>
  where?: InstanceType<typeof LoveWhereInput>
}
export declare class LoveWhereUniqueInput {
  id?: string
  alias?: string
  AND?: Array<LoveWhereInput>
  OR?: Array<LoveWhereInput>
  NOT?: Array<LoveWhereInput>
  name?: InstanceType<typeof StringFilter>
  isPrivate?: InstanceType<typeof BoolFilter>
  ownerId?: InstanceType<typeof StringFilter>
  createdAt?: InstanceType<typeof DateTimeFilter>
  updatedAt?: InstanceType<typeof DateTimeFilter>
  partners?: InstanceType<typeof AccountListRelationFilter>
  owner?: InstanceType<typeof AccountRelationFilter>
  Offer?: InstanceType<typeof OfferListRelationFilter>
}
export declare class LoveWhereInput {
  AND?: Array<LoveWhereInput>
  OR?: Array<LoveWhereInput>
  NOT?: Array<LoveWhereInput>
  id?: InstanceType<typeof StringFilter>
  alias?: InstanceType<typeof StringFilter>
  name?: InstanceType<typeof StringFilter>
  isPrivate?: InstanceType<typeof BoolFilter>
  ownerId?: InstanceType<typeof StringFilter>
  createdAt?: InstanceType<typeof DateTimeFilter>
  updatedAt?: InstanceType<typeof DateTimeFilter>
  partners?: InstanceType<typeof AccountListRelationFilter>
  owner?: InstanceType<typeof AccountRelationFilter>
  Offer?: InstanceType<typeof OfferListRelationFilter>
}
export declare class Love {
  id: string
  alias: string
  name: string
  isPrivate: boolean
  ownerId: string
  createdAt: Date
  updatedAt: Date
  partners?: Array<Account>
  owner?: InstanceType<typeof Account>
  Offer?: Array<Offer>
  _count?: InstanceType<typeof LoveCount>
}
export declare class UpdateManyLoveArgs {
  data: InstanceType<typeof LoveUpdateManyMutationInput>
  where?: InstanceType<typeof LoveWhereInput>
}
export declare class UpdateOneLoveArgs {
  data: InstanceType<typeof LoveUpdateInput>
  where: Prisma.AtLeast<LoveWhereUniqueInput, 'id' | 'alias'>
}
export declare class UpsertOneLoveArgs {
  where: Prisma.AtLeast<LoveWhereUniqueInput, 'id' | 'alias'>
  create: InstanceType<typeof LoveCreateInput>
  update: InstanceType<typeof LoveUpdateInput>
}
export declare class AggregateMessage {
  _count?: InstanceType<typeof MessageCountAggregate>
  _min?: InstanceType<typeof MessageMinAggregate>
  _max?: InstanceType<typeof MessageMaxAggregate>
}
export declare class CreateManyMessageArgs {
  data: Array<MessageCreateManyInput>
  skipDuplicates?: boolean
}
export declare class CreateOneMessageArgs {
  data: InstanceType<typeof MessageCreateInput>
}
export declare class DeleteManyMessageArgs {
  where?: InstanceType<typeof MessageWhereInput>
}
export declare class DeleteOneMessageArgs {
  where: Prisma.AtLeast<MessageWhereUniqueInput, 'id'>
}
export declare class FindFirstMessageOrThrowArgs {
  where?: InstanceType<typeof MessageWhereInput>
  orderBy?: Array<MessageOrderByWithRelationInput>
  cursor?: Prisma.AtLeast<MessageWhereUniqueInput, 'id'>
  take?: number
  skip?: number
  distinct?: Array<keyof typeof MessageScalarFieldEnum>
}
export declare class FindFirstMessageArgs {
  where?: InstanceType<typeof MessageWhereInput>
  orderBy?: Array<MessageOrderByWithRelationInput>
  cursor?: Prisma.AtLeast<MessageWhereUniqueInput, 'id'>
  take?: number
  skip?: number
  distinct?: Array<keyof typeof MessageScalarFieldEnum>
}
export declare class FindManyMessageArgs {
  where?: InstanceType<typeof MessageWhereInput>
  orderBy?: Array<MessageOrderByWithRelationInput>
  cursor?: Prisma.AtLeast<MessageWhereUniqueInput, 'id'>
  take?: number
  skip?: number
  distinct?: Array<keyof typeof MessageScalarFieldEnum>
}
export declare class FindUniqueMessageOrThrowArgs {
  where: Prisma.AtLeast<MessageWhereUniqueInput, 'id'>
}
export declare class FindUniqueMessageArgs {
  where: Prisma.AtLeast<MessageWhereUniqueInput, 'id'>
}
export declare class MessageAggregateArgs {
  where?: InstanceType<typeof MessageWhereInput>
  orderBy?: Array<MessageOrderByWithRelationInput>
  cursor?: Prisma.AtLeast<MessageWhereUniqueInput, 'id'>
  take?: number
  skip?: number
  _count?: InstanceType<typeof MessageCountAggregateInput>
  _min?: InstanceType<typeof MessageMinAggregateInput>
  _max?: InstanceType<typeof MessageMaxAggregateInput>
}
export declare class MessageCountAggregateInput {
  id?: true
  text?: true
  authorId?: true
  chatId?: true
  createdAt?: true
  updatedAt?: true
  _all?: true
}
export declare class MessageCountAggregate {
  id: number
  text: number
  authorId: number
  chatId: number
  createdAt: number
  updatedAt: number
  _all: number
}
export declare class MessageCountOrderByAggregateInput {
  id?: keyof typeof SortOrder
  text?: keyof typeof SortOrder
  authorId?: keyof typeof SortOrder
  chatId?: keyof typeof SortOrder
  createdAt?: keyof typeof SortOrder
  updatedAt?: keyof typeof SortOrder
}
export declare class MessageCount {
  uploads?: number
}
export declare class MessageCreateManyAuthorInputEnvelope {
  data: Array<MessageCreateManyAuthorInput>
  skipDuplicates?: boolean
}
export declare class MessageCreateManyAuthorInput {
  id?: string
  text: string
  chatId: string
  createdAt?: Date | string
  updatedAt?: Date | string
}
export declare class MessageCreateManyChatInputEnvelope {
  data: Array<MessageCreateManyChatInput>
  skipDuplicates?: boolean
}
export declare class MessageCreateManyChatInput {
  id?: string
  text: string
  authorId: string
  createdAt?: Date | string
  updatedAt?: Date | string
}
export declare class MessageCreateManyInput {
  id?: string
  text: string
  authorId: string
  chatId: string
  createdAt?: Date | string
  updatedAt?: Date | string
}
export declare class MessageCreateNestedManyWithoutAuthorInput {
  create?: Array<MessageCreateWithoutAuthorInput>
  connectOrCreate?: Array<MessageCreateOrConnectWithoutAuthorInput>
  createMany?: InstanceType<typeof MessageCreateManyAuthorInputEnvelope>
  connect?: Array<Prisma.AtLeast<MessageWhereUniqueInput, 'id'>>
}
export declare class MessageCreateNestedManyWithoutChatInput {
  create?: Array<MessageCreateWithoutChatInput>
  connectOrCreate?: Array<MessageCreateOrConnectWithoutChatInput>
  createMany?: InstanceType<typeof MessageCreateManyChatInputEnvelope>
  connect?: Array<Prisma.AtLeast<MessageWhereUniqueInput, 'id'>>
}
export declare class MessageCreateNestedManyWithoutUploadsInput {
  create?: Array<MessageCreateWithoutUploadsInput>
  connectOrCreate?: Array<MessageCreateOrConnectWithoutUploadsInput>
  connect?: Array<Prisma.AtLeast<MessageWhereUniqueInput, 'id'>>
}
export declare class MessageCreateOrConnectWithoutAuthorInput {
  where: Prisma.AtLeast<MessageWhereUniqueInput, 'id'>
  create: InstanceType<typeof MessageCreateWithoutAuthorInput>
}
export declare class MessageCreateOrConnectWithoutChatInput {
  where: Prisma.AtLeast<MessageWhereUniqueInput, 'id'>
  create: InstanceType<typeof MessageCreateWithoutChatInput>
}
export declare class MessageCreateOrConnectWithoutUploadsInput {
  where: Prisma.AtLeast<MessageWhereUniqueInput, 'id'>
  create: InstanceType<typeof MessageCreateWithoutUploadsInput>
}
export declare class MessageCreateWithoutAuthorInput {
  id?: string
  text: string
  createdAt?: Date | string
  updatedAt?: Date | string
  chat: InstanceType<typeof ChatCreateNestedOneWithoutMessagesInput>
  uploads?: InstanceType<typeof UploadCreateNestedManyWithoutMessagesInput>
}
export declare class MessageCreateWithoutChatInput {
  id?: string
  text: string
  createdAt?: Date | string
  updatedAt?: Date | string
  author: InstanceType<typeof AccountCreateNestedOneWithoutOwnedMessagesInput>
  uploads?: InstanceType<typeof UploadCreateNestedManyWithoutMessagesInput>
}
export declare class MessageCreateWithoutUploadsInput {
  id?: string
  text: string
  createdAt?: Date | string
  updatedAt?: Date | string
  author: InstanceType<typeof AccountCreateNestedOneWithoutOwnedMessagesInput>
  chat: InstanceType<typeof ChatCreateNestedOneWithoutMessagesInput>
}
export declare class MessageCreateInput {
  id?: string
  text: string
  createdAt?: Date | string
  updatedAt?: Date | string
  author: InstanceType<typeof AccountCreateNestedOneWithoutOwnedMessagesInput>
  chat: InstanceType<typeof ChatCreateNestedOneWithoutMessagesInput>
  uploads?: InstanceType<typeof UploadCreateNestedManyWithoutMessagesInput>
}
export declare class MessageGroupByArgs {
  where?: InstanceType<typeof MessageWhereInput>
  orderBy?: Array<MessageOrderByWithAggregationInput>
  by: Array<keyof typeof MessageScalarFieldEnum>
  having?: InstanceType<typeof MessageScalarWhereWithAggregatesInput>
  take?: number
  skip?: number
  _count?: InstanceType<typeof MessageCountAggregateInput>
  _min?: InstanceType<typeof MessageMinAggregateInput>
  _max?: InstanceType<typeof MessageMaxAggregateInput>
}
export declare class MessageGroupBy {
  id: string
  text: string
  authorId: string
  chatId: string
  createdAt: Date | string
  updatedAt: Date | string
  _count?: InstanceType<typeof MessageCountAggregate>
  _min?: InstanceType<typeof MessageMinAggregate>
  _max?: InstanceType<typeof MessageMaxAggregate>
}
export declare class MessageListRelationFilter {
  every?: InstanceType<typeof MessageWhereInput>
  some?: InstanceType<typeof MessageWhereInput>
  none?: InstanceType<typeof MessageWhereInput>
}
export declare class MessageMaxAggregateInput {
  id?: true
  text?: true
  authorId?: true
  chatId?: true
  createdAt?: true
  updatedAt?: true
}
export declare class MessageMaxAggregate {
  id?: string
  text?: string
  authorId?: string
  chatId?: string
  createdAt?: Date | string
  updatedAt?: Date | string
}
export declare class MessageMaxOrderByAggregateInput {
  id?: keyof typeof SortOrder
  text?: keyof typeof SortOrder
  authorId?: keyof typeof SortOrder
  chatId?: keyof typeof SortOrder
  createdAt?: keyof typeof SortOrder
  updatedAt?: keyof typeof SortOrder
}
export declare class MessageMinAggregateInput {
  id?: true
  text?: true
  authorId?: true
  chatId?: true
  createdAt?: true
  updatedAt?: true
}
export declare class MessageMinAggregate {
  id?: string
  text?: string
  authorId?: string
  chatId?: string
  createdAt?: Date | string
  updatedAt?: Date | string
}
export declare class MessageMinOrderByAggregateInput {
  id?: keyof typeof SortOrder
  text?: keyof typeof SortOrder
  authorId?: keyof typeof SortOrder
  chatId?: keyof typeof SortOrder
  createdAt?: keyof typeof SortOrder
  updatedAt?: keyof typeof SortOrder
}
export declare class MessageOrderByRelationAggregateInput {
  _count?: keyof typeof SortOrder
}
export declare class MessageOrderByWithAggregationInput {
  id?: keyof typeof SortOrder
  text?: keyof typeof SortOrder
  authorId?: keyof typeof SortOrder
  chatId?: keyof typeof SortOrder
  createdAt?: keyof typeof SortOrder
  updatedAt?: keyof typeof SortOrder
  _count?: InstanceType<typeof MessageCountOrderByAggregateInput>
  _max?: InstanceType<typeof MessageMaxOrderByAggregateInput>
  _min?: InstanceType<typeof MessageMinOrderByAggregateInput>
}
export declare class MessageOrderByWithRelationInput {
  id?: keyof typeof SortOrder
  text?: keyof typeof SortOrder
  authorId?: keyof typeof SortOrder
  chatId?: keyof typeof SortOrder
  createdAt?: keyof typeof SortOrder
  updatedAt?: keyof typeof SortOrder
  author?: InstanceType<typeof AccountOrderByWithRelationInput>
  chat?: InstanceType<typeof ChatOrderByWithRelationInput>
  uploads?: InstanceType<typeof UploadOrderByRelationAggregateInput>
}
export declare class MessageScalarWhereWithAggregatesInput {
  AND?: Array<MessageScalarWhereWithAggregatesInput>
  OR?: Array<MessageScalarWhereWithAggregatesInput>
  NOT?: Array<MessageScalarWhereWithAggregatesInput>
  id?: InstanceType<typeof StringWithAggregatesFilter>
  text?: InstanceType<typeof StringWithAggregatesFilter>
  authorId?: InstanceType<typeof StringWithAggregatesFilter>
  chatId?: InstanceType<typeof StringWithAggregatesFilter>
  createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>
  updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>
}
export declare class MessageScalarWhereInput {
  AND?: Array<MessageScalarWhereInput>
  OR?: Array<MessageScalarWhereInput>
  NOT?: Array<MessageScalarWhereInput>
  id?: InstanceType<typeof StringFilter>
  text?: InstanceType<typeof StringFilter>
  authorId?: InstanceType<typeof StringFilter>
  chatId?: InstanceType<typeof StringFilter>
  createdAt?: InstanceType<typeof DateTimeFilter>
  updatedAt?: InstanceType<typeof DateTimeFilter>
}
export declare class MessageUncheckedCreateNestedManyWithoutAuthorInput {
  create?: Array<MessageCreateWithoutAuthorInput>
  connectOrCreate?: Array<MessageCreateOrConnectWithoutAuthorInput>
  createMany?: InstanceType<typeof MessageCreateManyAuthorInputEnvelope>
  connect?: Array<Prisma.AtLeast<MessageWhereUniqueInput, 'id'>>
}
export declare class MessageUncheckedCreateNestedManyWithoutChatInput {
  create?: Array<MessageCreateWithoutChatInput>
  connectOrCreate?: Array<MessageCreateOrConnectWithoutChatInput>
  createMany?: InstanceType<typeof MessageCreateManyChatInputEnvelope>
  connect?: Array<Prisma.AtLeast<MessageWhereUniqueInput, 'id'>>
}
export declare class MessageUncheckedCreateNestedManyWithoutUploadsInput {
  create?: Array<MessageCreateWithoutUploadsInput>
  connectOrCreate?: Array<MessageCreateOrConnectWithoutUploadsInput>
  connect?: Array<Prisma.AtLeast<MessageWhereUniqueInput, 'id'>>
}
export declare class MessageUncheckedCreateWithoutAuthorInput {
  id?: string
  text: string
  chatId: string
  createdAt?: Date | string
  updatedAt?: Date | string
  uploads?: InstanceType<
    typeof UploadUncheckedCreateNestedManyWithoutMessagesInput
  >
}
export declare class MessageUncheckedCreateWithoutChatInput {
  id?: string
  text: string
  authorId: string
  createdAt?: Date | string
  updatedAt?: Date | string
  uploads?: InstanceType<
    typeof UploadUncheckedCreateNestedManyWithoutMessagesInput
  >
}
export declare class MessageUncheckedCreateWithoutUploadsInput {
  id?: string
  text: string
  authorId: string
  chatId: string
  createdAt?: Date | string
  updatedAt?: Date | string
}
export declare class MessageUncheckedCreateInput {
  id?: string
  text: string
  authorId: string
  chatId: string
  createdAt?: Date | string
  updatedAt?: Date | string
  uploads?: InstanceType<
    typeof UploadUncheckedCreateNestedManyWithoutMessagesInput
  >
}
export declare class MessageUncheckedUpdateManyWithoutAuthorNestedInput {
  create?: Array<MessageCreateWithoutAuthorInput>
  connectOrCreate?: Array<MessageCreateOrConnectWithoutAuthorInput>
  upsert?: Array<MessageUpsertWithWhereUniqueWithoutAuthorInput>
  createMany?: InstanceType<typeof MessageCreateManyAuthorInputEnvelope>
  set?: Array<Prisma.AtLeast<MessageWhereUniqueInput, 'id'>>
  disconnect?: Array<Prisma.AtLeast<MessageWhereUniqueInput, 'id'>>
  delete?: Array<Prisma.AtLeast<MessageWhereUniqueInput, 'id'>>
  connect?: Array<Prisma.AtLeast<MessageWhereUniqueInput, 'id'>>
  update?: Array<MessageUpdateWithWhereUniqueWithoutAuthorInput>
  updateMany?: Array<MessageUpdateManyWithWhereWithoutAuthorInput>
  deleteMany?: Array<MessageScalarWhereInput>
}
export declare class MessageUncheckedUpdateManyWithoutAuthorInput {
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>
  text?: InstanceType<typeof StringFieldUpdateOperationsInput>
  chatId?: InstanceType<typeof StringFieldUpdateOperationsInput>
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
}
export declare class MessageUncheckedUpdateManyWithoutChatNestedInput {
  create?: Array<MessageCreateWithoutChatInput>
  connectOrCreate?: Array<MessageCreateOrConnectWithoutChatInput>
  upsert?: Array<MessageUpsertWithWhereUniqueWithoutChatInput>
  createMany?: InstanceType<typeof MessageCreateManyChatInputEnvelope>
  set?: Array<Prisma.AtLeast<MessageWhereUniqueInput, 'id'>>
  disconnect?: Array<Prisma.AtLeast<MessageWhereUniqueInput, 'id'>>
  delete?: Array<Prisma.AtLeast<MessageWhereUniqueInput, 'id'>>
  connect?: Array<Prisma.AtLeast<MessageWhereUniqueInput, 'id'>>
  update?: Array<MessageUpdateWithWhereUniqueWithoutChatInput>
  updateMany?: Array<MessageUpdateManyWithWhereWithoutChatInput>
  deleteMany?: Array<MessageScalarWhereInput>
}
export declare class MessageUncheckedUpdateManyWithoutChatInput {
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>
  text?: InstanceType<typeof StringFieldUpdateOperationsInput>
  authorId?: InstanceType<typeof StringFieldUpdateOperationsInput>
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
}
export declare class MessageUncheckedUpdateManyWithoutUploadsNestedInput {
  create?: Array<MessageCreateWithoutUploadsInput>
  connectOrCreate?: Array<MessageCreateOrConnectWithoutUploadsInput>
  upsert?: Array<MessageUpsertWithWhereUniqueWithoutUploadsInput>
  set?: Array<Prisma.AtLeast<MessageWhereUniqueInput, 'id'>>
  disconnect?: Array<Prisma.AtLeast<MessageWhereUniqueInput, 'id'>>
  delete?: Array<Prisma.AtLeast<MessageWhereUniqueInput, 'id'>>
  connect?: Array<Prisma.AtLeast<MessageWhereUniqueInput, 'id'>>
  update?: Array<MessageUpdateWithWhereUniqueWithoutUploadsInput>
  updateMany?: Array<MessageUpdateManyWithWhereWithoutUploadsInput>
  deleteMany?: Array<MessageScalarWhereInput>
}
export declare class MessageUncheckedUpdateManyWithoutUploadsInput {
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>
  text?: InstanceType<typeof StringFieldUpdateOperationsInput>
  authorId?: InstanceType<typeof StringFieldUpdateOperationsInput>
  chatId?: InstanceType<typeof StringFieldUpdateOperationsInput>
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
}
export declare class MessageUncheckedUpdateManyInput {
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>
  text?: InstanceType<typeof StringFieldUpdateOperationsInput>
  authorId?: InstanceType<typeof StringFieldUpdateOperationsInput>
  chatId?: InstanceType<typeof StringFieldUpdateOperationsInput>
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
}
export declare class MessageUncheckedUpdateWithoutAuthorInput {
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>
  text?: InstanceType<typeof StringFieldUpdateOperationsInput>
  chatId?: InstanceType<typeof StringFieldUpdateOperationsInput>
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  uploads?: InstanceType<
    typeof UploadUncheckedUpdateManyWithoutMessagesNestedInput
  >
}
export declare class MessageUncheckedUpdateWithoutChatInput {
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>
  text?: InstanceType<typeof StringFieldUpdateOperationsInput>
  authorId?: InstanceType<typeof StringFieldUpdateOperationsInput>
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  uploads?: InstanceType<
    typeof UploadUncheckedUpdateManyWithoutMessagesNestedInput
  >
}
export declare class MessageUncheckedUpdateWithoutUploadsInput {
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>
  text?: InstanceType<typeof StringFieldUpdateOperationsInput>
  authorId?: InstanceType<typeof StringFieldUpdateOperationsInput>
  chatId?: InstanceType<typeof StringFieldUpdateOperationsInput>
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
}
export declare class MessageUncheckedUpdateInput {
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>
  text?: InstanceType<typeof StringFieldUpdateOperationsInput>
  authorId?: InstanceType<typeof StringFieldUpdateOperationsInput>
  chatId?: InstanceType<typeof StringFieldUpdateOperationsInput>
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  uploads?: InstanceType<
    typeof UploadUncheckedUpdateManyWithoutMessagesNestedInput
  >
}
export declare class MessageUpdateManyMutationInput {
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>
  text?: InstanceType<typeof StringFieldUpdateOperationsInput>
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
}
export declare class MessageUpdateManyWithWhereWithoutAuthorInput {
  where: InstanceType<typeof MessageScalarWhereInput>
  data: InstanceType<typeof MessageUpdateManyMutationInput>
}
export declare class MessageUpdateManyWithWhereWithoutChatInput {
  where: InstanceType<typeof MessageScalarWhereInput>
  data: InstanceType<typeof MessageUpdateManyMutationInput>
}
export declare class MessageUpdateManyWithWhereWithoutUploadsInput {
  where: InstanceType<typeof MessageScalarWhereInput>
  data: InstanceType<typeof MessageUpdateManyMutationInput>
}
export declare class MessageUpdateManyWithoutAuthorNestedInput {
  create?: Array<MessageCreateWithoutAuthorInput>
  connectOrCreate?: Array<MessageCreateOrConnectWithoutAuthorInput>
  upsert?: Array<MessageUpsertWithWhereUniqueWithoutAuthorInput>
  createMany?: InstanceType<typeof MessageCreateManyAuthorInputEnvelope>
  set?: Array<Prisma.AtLeast<MessageWhereUniqueInput, 'id'>>
  disconnect?: Array<Prisma.AtLeast<MessageWhereUniqueInput, 'id'>>
  delete?: Array<Prisma.AtLeast<MessageWhereUniqueInput, 'id'>>
  connect?: Array<Prisma.AtLeast<MessageWhereUniqueInput, 'id'>>
  update?: Array<MessageUpdateWithWhereUniqueWithoutAuthorInput>
  updateMany?: Array<MessageUpdateManyWithWhereWithoutAuthorInput>
  deleteMany?: Array<MessageScalarWhereInput>
}
export declare class MessageUpdateManyWithoutChatNestedInput {
  create?: Array<MessageCreateWithoutChatInput>
  connectOrCreate?: Array<MessageCreateOrConnectWithoutChatInput>
  upsert?: Array<MessageUpsertWithWhereUniqueWithoutChatInput>
  createMany?: InstanceType<typeof MessageCreateManyChatInputEnvelope>
  set?: Array<Prisma.AtLeast<MessageWhereUniqueInput, 'id'>>
  disconnect?: Array<Prisma.AtLeast<MessageWhereUniqueInput, 'id'>>
  delete?: Array<Prisma.AtLeast<MessageWhereUniqueInput, 'id'>>
  connect?: Array<Prisma.AtLeast<MessageWhereUniqueInput, 'id'>>
  update?: Array<MessageUpdateWithWhereUniqueWithoutChatInput>
  updateMany?: Array<MessageUpdateManyWithWhereWithoutChatInput>
  deleteMany?: Array<MessageScalarWhereInput>
}
export declare class MessageUpdateManyWithoutUploadsNestedInput {
  create?: Array<MessageCreateWithoutUploadsInput>
  connectOrCreate?: Array<MessageCreateOrConnectWithoutUploadsInput>
  upsert?: Array<MessageUpsertWithWhereUniqueWithoutUploadsInput>
  set?: Array<Prisma.AtLeast<MessageWhereUniqueInput, 'id'>>
  disconnect?: Array<Prisma.AtLeast<MessageWhereUniqueInput, 'id'>>
  delete?: Array<Prisma.AtLeast<MessageWhereUniqueInput, 'id'>>
  connect?: Array<Prisma.AtLeast<MessageWhereUniqueInput, 'id'>>
  update?: Array<MessageUpdateWithWhereUniqueWithoutUploadsInput>
  updateMany?: Array<MessageUpdateManyWithWhereWithoutUploadsInput>
  deleteMany?: Array<MessageScalarWhereInput>
}
export declare class MessageUpdateWithWhereUniqueWithoutAuthorInput {
  where: Prisma.AtLeast<MessageWhereUniqueInput, 'id'>
  data: InstanceType<typeof MessageUpdateWithoutAuthorInput>
}
export declare class MessageUpdateWithWhereUniqueWithoutChatInput {
  where: Prisma.AtLeast<MessageWhereUniqueInput, 'id'>
  data: InstanceType<typeof MessageUpdateWithoutChatInput>
}
export declare class MessageUpdateWithWhereUniqueWithoutUploadsInput {
  where: Prisma.AtLeast<MessageWhereUniqueInput, 'id'>
  data: InstanceType<typeof MessageUpdateWithoutUploadsInput>
}
export declare class MessageUpdateWithoutAuthorInput {
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>
  text?: InstanceType<typeof StringFieldUpdateOperationsInput>
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  chat?: InstanceType<typeof ChatUpdateOneRequiredWithoutMessagesNestedInput>
  uploads?: InstanceType<typeof UploadUpdateManyWithoutMessagesNestedInput>
}
export declare class MessageUpdateWithoutChatInput {
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>
  text?: InstanceType<typeof StringFieldUpdateOperationsInput>
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  author?: InstanceType<
    typeof AccountUpdateOneRequiredWithoutOwnedMessagesNestedInput
  >
  uploads?: InstanceType<typeof UploadUpdateManyWithoutMessagesNestedInput>
}
export declare class MessageUpdateWithoutUploadsInput {
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>
  text?: InstanceType<typeof StringFieldUpdateOperationsInput>
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  author?: InstanceType<
    typeof AccountUpdateOneRequiredWithoutOwnedMessagesNestedInput
  >
  chat?: InstanceType<typeof ChatUpdateOneRequiredWithoutMessagesNestedInput>
}
export declare class MessageUpdateInput {
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>
  text?: InstanceType<typeof StringFieldUpdateOperationsInput>
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  author?: InstanceType<
    typeof AccountUpdateOneRequiredWithoutOwnedMessagesNestedInput
  >
  chat?: InstanceType<typeof ChatUpdateOneRequiredWithoutMessagesNestedInput>
  uploads?: InstanceType<typeof UploadUpdateManyWithoutMessagesNestedInput>
}
export declare class MessageUpsertWithWhereUniqueWithoutAuthorInput {
  where: Prisma.AtLeast<MessageWhereUniqueInput, 'id'>
  update: InstanceType<typeof MessageUpdateWithoutAuthorInput>
  create: InstanceType<typeof MessageCreateWithoutAuthorInput>
}
export declare class MessageUpsertWithWhereUniqueWithoutChatInput {
  where: Prisma.AtLeast<MessageWhereUniqueInput, 'id'>
  update: InstanceType<typeof MessageUpdateWithoutChatInput>
  create: InstanceType<typeof MessageCreateWithoutChatInput>
}
export declare class MessageUpsertWithWhereUniqueWithoutUploadsInput {
  where: Prisma.AtLeast<MessageWhereUniqueInput, 'id'>
  update: InstanceType<typeof MessageUpdateWithoutUploadsInput>
  create: InstanceType<typeof MessageCreateWithoutUploadsInput>
}
export declare class MessageWhereUniqueInput {
  id?: string
  AND?: Array<MessageWhereInput>
  OR?: Array<MessageWhereInput>
  NOT?: Array<MessageWhereInput>
  text?: InstanceType<typeof StringFilter>
  authorId?: InstanceType<typeof StringFilter>
  chatId?: InstanceType<typeof StringFilter>
  createdAt?: InstanceType<typeof DateTimeFilter>
  updatedAt?: InstanceType<typeof DateTimeFilter>
  author?: InstanceType<typeof AccountRelationFilter>
  chat?: InstanceType<typeof ChatRelationFilter>
  uploads?: InstanceType<typeof UploadListRelationFilter>
}
export declare class MessageWhereInput {
  AND?: Array<MessageWhereInput>
  OR?: Array<MessageWhereInput>
  NOT?: Array<MessageWhereInput>
  id?: InstanceType<typeof StringFilter>
  text?: InstanceType<typeof StringFilter>
  authorId?: InstanceType<typeof StringFilter>
  chatId?: InstanceType<typeof StringFilter>
  createdAt?: InstanceType<typeof DateTimeFilter>
  updatedAt?: InstanceType<typeof DateTimeFilter>
  author?: InstanceType<typeof AccountRelationFilter>
  chat?: InstanceType<typeof ChatRelationFilter>
  uploads?: InstanceType<typeof UploadListRelationFilter>
}
export declare class Message {
  id: string
  text: string
  authorId: string
  chatId: string
  createdAt: Date
  updatedAt: Date
  author?: InstanceType<typeof Account>
  chat?: InstanceType<typeof Chat>
  uploads?: Array<Upload>
  _count?: InstanceType<typeof MessageCount>
}
export declare class UpdateManyMessageArgs {
  data: InstanceType<typeof MessageUpdateManyMutationInput>
  where?: InstanceType<typeof MessageWhereInput>
}
export declare class UpdateOneMessageArgs {
  data: InstanceType<typeof MessageUpdateInput>
  where: Prisma.AtLeast<MessageWhereUniqueInput, 'id'>
}
export declare class UpsertOneMessageArgs {
  where: Prisma.AtLeast<MessageWhereUniqueInput, 'id'>
  create: InstanceType<typeof MessageCreateInput>
  update: InstanceType<typeof MessageUpdateInput>
}
export declare class AggregateOffer {
  _count?: InstanceType<typeof OfferCountAggregate>
  _min?: InstanceType<typeof OfferMinAggregate>
  _max?: InstanceType<typeof OfferMaxAggregate>
}
export declare class CreateManyOfferArgs {
  data: Array<OfferCreateManyInput>
  skipDuplicates?: boolean
}
export declare class CreateOneOfferArgs {
  data: InstanceType<typeof OfferCreateInput>
}
export declare class DeleteManyOfferArgs {
  where?: InstanceType<typeof OfferWhereInput>
}
export declare class DeleteOneOfferArgs {
  where: Prisma.AtLeast<OfferWhereUniqueInput, 'id' | 'targetId'>
}
export declare class FindFirstOfferOrThrowArgs {
  where?: InstanceType<typeof OfferWhereInput>
  orderBy?: Array<OfferOrderByWithRelationInput>
  cursor?: Prisma.AtLeast<OfferWhereUniqueInput, 'id' | 'targetId'>
  take?: number
  skip?: number
  distinct?: Array<keyof typeof OfferScalarFieldEnum>
}
export declare class FindFirstOfferArgs {
  where?: InstanceType<typeof OfferWhereInput>
  orderBy?: Array<OfferOrderByWithRelationInput>
  cursor?: Prisma.AtLeast<OfferWhereUniqueInput, 'id' | 'targetId'>
  take?: number
  skip?: number
  distinct?: Array<keyof typeof OfferScalarFieldEnum>
}
export declare class FindManyOfferArgs {
  where?: InstanceType<typeof OfferWhereInput>
  orderBy?: Array<OfferOrderByWithRelationInput>
  cursor?: Prisma.AtLeast<OfferWhereUniqueInput, 'id' | 'targetId'>
  take?: number
  skip?: number
  distinct?: Array<keyof typeof OfferScalarFieldEnum>
}
export declare class FindUniqueOfferOrThrowArgs {
  where: Prisma.AtLeast<OfferWhereUniqueInput, 'id' | 'targetId'>
}
export declare class FindUniqueOfferArgs {
  where: Prisma.AtLeast<OfferWhereUniqueInput, 'id' | 'targetId'>
}
export declare class OfferAggregateArgs {
  where?: InstanceType<typeof OfferWhereInput>
  orderBy?: Array<OfferOrderByWithRelationInput>
  cursor?: Prisma.AtLeast<OfferWhereUniqueInput, 'id' | 'targetId'>
  take?: number
  skip?: number
  _count?: InstanceType<typeof OfferCountAggregateInput>
  _min?: InstanceType<typeof OfferMinAggregateInput>
  _max?: InstanceType<typeof OfferMaxAggregateInput>
}
export declare class OfferCountAggregateInput {
  id?: true
  code?: true
  loveId?: true
  ownerId?: true
  targetId?: true
  isUsed?: true
  createdAt?: true
  updatedAt?: true
  _all?: true
}
export declare class OfferCountAggregate {
  id: number
  code: number
  loveId: number
  ownerId: number
  targetId: number
  isUsed: number
  createdAt: number
  updatedAt: number
  _all: number
}
export declare class OfferCountOrderByAggregateInput {
  id?: keyof typeof SortOrder
  code?: keyof typeof SortOrder
  loveId?: keyof typeof SortOrder
  ownerId?: keyof typeof SortOrder
  targetId?: keyof typeof SortOrder
  isUsed?: keyof typeof SortOrder
  createdAt?: keyof typeof SortOrder
  updatedAt?: keyof typeof SortOrder
}
export declare class OfferCreateManyLoveInputEnvelope {
  data: Array<OfferCreateManyLoveInput>
  skipDuplicates?: boolean
}
export declare class OfferCreateManyLoveInput {
  id?: string
  code: string
  ownerId: string
  targetId: string
  isUsed?: boolean
  createdAt?: Date | string
  updatedAt?: Date | string
}
export declare class OfferCreateManyOwnerInputEnvelope {
  data: Array<OfferCreateManyOwnerInput>
  skipDuplicates?: boolean
}
export declare class OfferCreateManyOwnerInput {
  id?: string
  code: string
  loveId: string
  targetId: string
  isUsed?: boolean
  createdAt?: Date | string
  updatedAt?: Date | string
}
export declare class OfferCreateManyInput {
  id?: string
  code: string
  loveId: string
  ownerId: string
  targetId: string
  isUsed?: boolean
  createdAt?: Date | string
  updatedAt?: Date | string
}
export declare class OfferCreateNestedManyWithoutLoveInput {
  create?: Array<OfferCreateWithoutLoveInput>
  connectOrCreate?: Array<OfferCreateOrConnectWithoutLoveInput>
  createMany?: InstanceType<typeof OfferCreateManyLoveInputEnvelope>
  connect?: Array<Prisma.AtLeast<OfferWhereUniqueInput, 'id' | 'targetId'>>
}
export declare class OfferCreateNestedManyWithoutOwnerInput {
  create?: Array<OfferCreateWithoutOwnerInput>
  connectOrCreate?: Array<OfferCreateOrConnectWithoutOwnerInput>
  createMany?: InstanceType<typeof OfferCreateManyOwnerInputEnvelope>
  connect?: Array<Prisma.AtLeast<OfferWhereUniqueInput, 'id' | 'targetId'>>
}
export declare class OfferCreateNestedOneWithoutTargetInput {
  create?: InstanceType<typeof OfferCreateWithoutTargetInput>
  connectOrCreate?: InstanceType<typeof OfferCreateOrConnectWithoutTargetInput>
  connect?: Prisma.AtLeast<OfferWhereUniqueInput, 'id' | 'targetId'>
}
export declare class OfferCreateOrConnectWithoutLoveInput {
  where: Prisma.AtLeast<OfferWhereUniqueInput, 'id' | 'targetId'>
  create: InstanceType<typeof OfferCreateWithoutLoveInput>
}
export declare class OfferCreateOrConnectWithoutOwnerInput {
  where: Prisma.AtLeast<OfferWhereUniqueInput, 'id' | 'targetId'>
  create: InstanceType<typeof OfferCreateWithoutOwnerInput>
}
export declare class OfferCreateOrConnectWithoutTargetInput {
  where: Prisma.AtLeast<OfferWhereUniqueInput, 'id' | 'targetId'>
  create: InstanceType<typeof OfferCreateWithoutTargetInput>
}
export declare class OfferCreateWithoutLoveInput {
  id?: string
  code: string
  isUsed?: boolean
  createdAt?: Date | string
  updatedAt?: Date | string
  owner: InstanceType<typeof AccountCreateNestedOneWithoutOwnedOffersInput>
  target: InstanceType<typeof AccountCreateNestedOneWithoutOfferInput>
}
export declare class OfferCreateWithoutOwnerInput {
  id?: string
  code: string
  isUsed?: boolean
  createdAt?: Date | string
  updatedAt?: Date | string
  love: InstanceType<typeof LoveCreateNestedOneWithoutOfferInput>
  target: InstanceType<typeof AccountCreateNestedOneWithoutOfferInput>
}
export declare class OfferCreateWithoutTargetInput {
  id?: string
  code: string
  isUsed?: boolean
  createdAt?: Date | string
  updatedAt?: Date | string
  love: InstanceType<typeof LoveCreateNestedOneWithoutOfferInput>
  owner: InstanceType<typeof AccountCreateNestedOneWithoutOwnedOffersInput>
}
export declare class OfferCreateInput {
  id?: string
  code: string
  isUsed?: boolean
  createdAt?: Date | string
  updatedAt?: Date | string
  love: InstanceType<typeof LoveCreateNestedOneWithoutOfferInput>
  owner: InstanceType<typeof AccountCreateNestedOneWithoutOwnedOffersInput>
  target: InstanceType<typeof AccountCreateNestedOneWithoutOfferInput>
}
export declare class OfferGroupByArgs {
  where?: InstanceType<typeof OfferWhereInput>
  orderBy?: Array<OfferOrderByWithAggregationInput>
  by: Array<keyof typeof OfferScalarFieldEnum>
  having?: InstanceType<typeof OfferScalarWhereWithAggregatesInput>
  take?: number
  skip?: number
  _count?: InstanceType<typeof OfferCountAggregateInput>
  _min?: InstanceType<typeof OfferMinAggregateInput>
  _max?: InstanceType<typeof OfferMaxAggregateInput>
}
export declare class OfferGroupBy {
  id: string
  code: string
  loveId: string
  ownerId: string
  targetId: string
  isUsed: boolean
  createdAt: Date | string
  updatedAt: Date | string
  _count?: InstanceType<typeof OfferCountAggregate>
  _min?: InstanceType<typeof OfferMinAggregate>
  _max?: InstanceType<typeof OfferMaxAggregate>
}
export declare class OfferListRelationFilter {
  every?: InstanceType<typeof OfferWhereInput>
  some?: InstanceType<typeof OfferWhereInput>
  none?: InstanceType<typeof OfferWhereInput>
}
export declare class OfferMaxAggregateInput {
  id?: true
  code?: true
  loveId?: true
  ownerId?: true
  targetId?: true
  isUsed?: true
  createdAt?: true
  updatedAt?: true
}
export declare class OfferMaxAggregate {
  id?: string
  code?: string
  loveId?: string
  ownerId?: string
  targetId?: string
  isUsed?: boolean
  createdAt?: Date | string
  updatedAt?: Date | string
}
export declare class OfferMaxOrderByAggregateInput {
  id?: keyof typeof SortOrder
  code?: keyof typeof SortOrder
  loveId?: keyof typeof SortOrder
  ownerId?: keyof typeof SortOrder
  targetId?: keyof typeof SortOrder
  isUsed?: keyof typeof SortOrder
  createdAt?: keyof typeof SortOrder
  updatedAt?: keyof typeof SortOrder
}
export declare class OfferMinAggregateInput {
  id?: true
  code?: true
  loveId?: true
  ownerId?: true
  targetId?: true
  isUsed?: true
  createdAt?: true
  updatedAt?: true
}
export declare class OfferMinAggregate {
  id?: string
  code?: string
  loveId?: string
  ownerId?: string
  targetId?: string
  isUsed?: boolean
  createdAt?: Date | string
  updatedAt?: Date | string
}
export declare class OfferMinOrderByAggregateInput {
  id?: keyof typeof SortOrder
  code?: keyof typeof SortOrder
  loveId?: keyof typeof SortOrder
  ownerId?: keyof typeof SortOrder
  targetId?: keyof typeof SortOrder
  isUsed?: keyof typeof SortOrder
  createdAt?: keyof typeof SortOrder
  updatedAt?: keyof typeof SortOrder
}
export declare class OfferNullableRelationFilter {
  is?: InstanceType<typeof OfferWhereInput>
  isNot?: InstanceType<typeof OfferWhereInput>
}
export declare class OfferOrderByRelationAggregateInput {
  _count?: keyof typeof SortOrder
}
export declare class OfferOrderByWithAggregationInput {
  id?: keyof typeof SortOrder
  code?: keyof typeof SortOrder
  loveId?: keyof typeof SortOrder
  ownerId?: keyof typeof SortOrder
  targetId?: keyof typeof SortOrder
  isUsed?: keyof typeof SortOrder
  createdAt?: keyof typeof SortOrder
  updatedAt?: keyof typeof SortOrder
  _count?: InstanceType<typeof OfferCountOrderByAggregateInput>
  _max?: InstanceType<typeof OfferMaxOrderByAggregateInput>
  _min?: InstanceType<typeof OfferMinOrderByAggregateInput>
}
export declare class OfferOrderByWithRelationInput {
  id?: keyof typeof SortOrder
  code?: keyof typeof SortOrder
  loveId?: keyof typeof SortOrder
  ownerId?: keyof typeof SortOrder
  targetId?: keyof typeof SortOrder
  isUsed?: keyof typeof SortOrder
  createdAt?: keyof typeof SortOrder
  updatedAt?: keyof typeof SortOrder
  love?: InstanceType<typeof LoveOrderByWithRelationInput>
  owner?: InstanceType<typeof AccountOrderByWithRelationInput>
  target?: InstanceType<typeof AccountOrderByWithRelationInput>
}
export declare class OfferScalarWhereWithAggregatesInput {
  AND?: Array<OfferScalarWhereWithAggregatesInput>
  OR?: Array<OfferScalarWhereWithAggregatesInput>
  NOT?: Array<OfferScalarWhereWithAggregatesInput>
  id?: InstanceType<typeof StringWithAggregatesFilter>
  code?: InstanceType<typeof StringWithAggregatesFilter>
  loveId?: InstanceType<typeof StringWithAggregatesFilter>
  ownerId?: InstanceType<typeof StringWithAggregatesFilter>
  targetId?: InstanceType<typeof StringWithAggregatesFilter>
  isUsed?: InstanceType<typeof BoolWithAggregatesFilter>
  createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>
  updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>
}
export declare class OfferScalarWhereInput {
  AND?: Array<OfferScalarWhereInput>
  OR?: Array<OfferScalarWhereInput>
  NOT?: Array<OfferScalarWhereInput>
  id?: InstanceType<typeof StringFilter>
  code?: InstanceType<typeof StringFilter>
  loveId?: InstanceType<typeof StringFilter>
  ownerId?: InstanceType<typeof StringFilter>
  targetId?: InstanceType<typeof StringFilter>
  isUsed?: InstanceType<typeof BoolFilter>
  createdAt?: InstanceType<typeof DateTimeFilter>
  updatedAt?: InstanceType<typeof DateTimeFilter>
}
export declare class OfferUncheckedCreateNestedManyWithoutLoveInput {
  create?: Array<OfferCreateWithoutLoveInput>
  connectOrCreate?: Array<OfferCreateOrConnectWithoutLoveInput>
  createMany?: InstanceType<typeof OfferCreateManyLoveInputEnvelope>
  connect?: Array<Prisma.AtLeast<OfferWhereUniqueInput, 'id' | 'targetId'>>
}
export declare class OfferUncheckedCreateNestedManyWithoutOwnerInput {
  create?: Array<OfferCreateWithoutOwnerInput>
  connectOrCreate?: Array<OfferCreateOrConnectWithoutOwnerInput>
  createMany?: InstanceType<typeof OfferCreateManyOwnerInputEnvelope>
  connect?: Array<Prisma.AtLeast<OfferWhereUniqueInput, 'id' | 'targetId'>>
}
export declare class OfferUncheckedCreateNestedOneWithoutTargetInput {
  create?: InstanceType<typeof OfferCreateWithoutTargetInput>
  connectOrCreate?: InstanceType<typeof OfferCreateOrConnectWithoutTargetInput>
  connect?: Prisma.AtLeast<OfferWhereUniqueInput, 'id' | 'targetId'>
}
export declare class OfferUncheckedCreateWithoutLoveInput {
  id?: string
  code: string
  ownerId: string
  targetId: string
  isUsed?: boolean
  createdAt?: Date | string
  updatedAt?: Date | string
}
export declare class OfferUncheckedCreateWithoutOwnerInput {
  id?: string
  code: string
  loveId: string
  targetId: string
  isUsed?: boolean
  createdAt?: Date | string
  updatedAt?: Date | string
}
export declare class OfferUncheckedCreateWithoutTargetInput {
  id?: string
  code: string
  loveId: string
  ownerId: string
  isUsed?: boolean
  createdAt?: Date | string
  updatedAt?: Date | string
}
export declare class OfferUncheckedCreateInput {
  id?: string
  code: string
  loveId: string
  ownerId: string
  targetId: string
  isUsed?: boolean
  createdAt?: Date | string
  updatedAt?: Date | string
}
export declare class OfferUncheckedUpdateManyWithoutLoveNestedInput {
  create?: Array<OfferCreateWithoutLoveInput>
  connectOrCreate?: Array<OfferCreateOrConnectWithoutLoveInput>
  upsert?: Array<OfferUpsertWithWhereUniqueWithoutLoveInput>
  createMany?: InstanceType<typeof OfferCreateManyLoveInputEnvelope>
  set?: Array<Prisma.AtLeast<OfferWhereUniqueInput, 'id' | 'targetId'>>
  disconnect?: Array<Prisma.AtLeast<OfferWhereUniqueInput, 'id' | 'targetId'>>
  delete?: Array<Prisma.AtLeast<OfferWhereUniqueInput, 'id' | 'targetId'>>
  connect?: Array<Prisma.AtLeast<OfferWhereUniqueInput, 'id' | 'targetId'>>
  update?: Array<OfferUpdateWithWhereUniqueWithoutLoveInput>
  updateMany?: Array<OfferUpdateManyWithWhereWithoutLoveInput>
  deleteMany?: Array<OfferScalarWhereInput>
}
export declare class OfferUncheckedUpdateManyWithoutLoveInput {
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>
  code?: InstanceType<typeof StringFieldUpdateOperationsInput>
  ownerId?: InstanceType<typeof StringFieldUpdateOperationsInput>
  targetId?: InstanceType<typeof StringFieldUpdateOperationsInput>
  isUsed?: InstanceType<typeof BoolFieldUpdateOperationsInput>
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
}
export declare class OfferUncheckedUpdateManyWithoutOwnerNestedInput {
  create?: Array<OfferCreateWithoutOwnerInput>
  connectOrCreate?: Array<OfferCreateOrConnectWithoutOwnerInput>
  upsert?: Array<OfferUpsertWithWhereUniqueWithoutOwnerInput>
  createMany?: InstanceType<typeof OfferCreateManyOwnerInputEnvelope>
  set?: Array<Prisma.AtLeast<OfferWhereUniqueInput, 'id' | 'targetId'>>
  disconnect?: Array<Prisma.AtLeast<OfferWhereUniqueInput, 'id' | 'targetId'>>
  delete?: Array<Prisma.AtLeast<OfferWhereUniqueInput, 'id' | 'targetId'>>
  connect?: Array<Prisma.AtLeast<OfferWhereUniqueInput, 'id' | 'targetId'>>
  update?: Array<OfferUpdateWithWhereUniqueWithoutOwnerInput>
  updateMany?: Array<OfferUpdateManyWithWhereWithoutOwnerInput>
  deleteMany?: Array<OfferScalarWhereInput>
}
export declare class OfferUncheckedUpdateManyWithoutOwnerInput {
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>
  code?: InstanceType<typeof StringFieldUpdateOperationsInput>
  loveId?: InstanceType<typeof StringFieldUpdateOperationsInput>
  targetId?: InstanceType<typeof StringFieldUpdateOperationsInput>
  isUsed?: InstanceType<typeof BoolFieldUpdateOperationsInput>
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
}
export declare class OfferUncheckedUpdateManyInput {
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>
  code?: InstanceType<typeof StringFieldUpdateOperationsInput>
  loveId?: InstanceType<typeof StringFieldUpdateOperationsInput>
  ownerId?: InstanceType<typeof StringFieldUpdateOperationsInput>
  targetId?: InstanceType<typeof StringFieldUpdateOperationsInput>
  isUsed?: InstanceType<typeof BoolFieldUpdateOperationsInput>
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
}
export declare class OfferUncheckedUpdateOneWithoutTargetNestedInput {
  create?: InstanceType<typeof OfferCreateWithoutTargetInput>
  connectOrCreate?: InstanceType<typeof OfferCreateOrConnectWithoutTargetInput>
  upsert?: InstanceType<typeof OfferUpsertWithoutTargetInput>
  disconnect?: InstanceType<typeof OfferWhereInput>
  delete?: InstanceType<typeof OfferWhereInput>
  connect?: Prisma.AtLeast<OfferWhereUniqueInput, 'id' | 'targetId'>
  update?: InstanceType<typeof OfferUpdateToOneWithWhereWithoutTargetInput>
}
export declare class OfferUncheckedUpdateWithoutLoveInput {
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>
  code?: InstanceType<typeof StringFieldUpdateOperationsInput>
  ownerId?: InstanceType<typeof StringFieldUpdateOperationsInput>
  targetId?: InstanceType<typeof StringFieldUpdateOperationsInput>
  isUsed?: InstanceType<typeof BoolFieldUpdateOperationsInput>
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
}
export declare class OfferUncheckedUpdateWithoutOwnerInput {
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>
  code?: InstanceType<typeof StringFieldUpdateOperationsInput>
  loveId?: InstanceType<typeof StringFieldUpdateOperationsInput>
  targetId?: InstanceType<typeof StringFieldUpdateOperationsInput>
  isUsed?: InstanceType<typeof BoolFieldUpdateOperationsInput>
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
}
export declare class OfferUncheckedUpdateWithoutTargetInput {
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>
  code?: InstanceType<typeof StringFieldUpdateOperationsInput>
  loveId?: InstanceType<typeof StringFieldUpdateOperationsInput>
  ownerId?: InstanceType<typeof StringFieldUpdateOperationsInput>
  isUsed?: InstanceType<typeof BoolFieldUpdateOperationsInput>
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
}
export declare class OfferUncheckedUpdateInput {
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>
  code?: InstanceType<typeof StringFieldUpdateOperationsInput>
  loveId?: InstanceType<typeof StringFieldUpdateOperationsInput>
  ownerId?: InstanceType<typeof StringFieldUpdateOperationsInput>
  targetId?: InstanceType<typeof StringFieldUpdateOperationsInput>
  isUsed?: InstanceType<typeof BoolFieldUpdateOperationsInput>
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
}
export declare class OfferUpdateManyMutationInput {
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>
  code?: InstanceType<typeof StringFieldUpdateOperationsInput>
  isUsed?: InstanceType<typeof BoolFieldUpdateOperationsInput>
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
}
export declare class OfferUpdateManyWithWhereWithoutLoveInput {
  where: InstanceType<typeof OfferScalarWhereInput>
  data: InstanceType<typeof OfferUpdateManyMutationInput>
}
export declare class OfferUpdateManyWithWhereWithoutOwnerInput {
  where: InstanceType<typeof OfferScalarWhereInput>
  data: InstanceType<typeof OfferUpdateManyMutationInput>
}
export declare class OfferUpdateManyWithoutLoveNestedInput {
  create?: Array<OfferCreateWithoutLoveInput>
  connectOrCreate?: Array<OfferCreateOrConnectWithoutLoveInput>
  upsert?: Array<OfferUpsertWithWhereUniqueWithoutLoveInput>
  createMany?: InstanceType<typeof OfferCreateManyLoveInputEnvelope>
  set?: Array<Prisma.AtLeast<OfferWhereUniqueInput, 'id' | 'targetId'>>
  disconnect?: Array<Prisma.AtLeast<OfferWhereUniqueInput, 'id' | 'targetId'>>
  delete?: Array<Prisma.AtLeast<OfferWhereUniqueInput, 'id' | 'targetId'>>
  connect?: Array<Prisma.AtLeast<OfferWhereUniqueInput, 'id' | 'targetId'>>
  update?: Array<OfferUpdateWithWhereUniqueWithoutLoveInput>
  updateMany?: Array<OfferUpdateManyWithWhereWithoutLoveInput>
  deleteMany?: Array<OfferScalarWhereInput>
}
export declare class OfferUpdateManyWithoutOwnerNestedInput {
  create?: Array<OfferCreateWithoutOwnerInput>
  connectOrCreate?: Array<OfferCreateOrConnectWithoutOwnerInput>
  upsert?: Array<OfferUpsertWithWhereUniqueWithoutOwnerInput>
  createMany?: InstanceType<typeof OfferCreateManyOwnerInputEnvelope>
  set?: Array<Prisma.AtLeast<OfferWhereUniqueInput, 'id' | 'targetId'>>
  disconnect?: Array<Prisma.AtLeast<OfferWhereUniqueInput, 'id' | 'targetId'>>
  delete?: Array<Prisma.AtLeast<OfferWhereUniqueInput, 'id' | 'targetId'>>
  connect?: Array<Prisma.AtLeast<OfferWhereUniqueInput, 'id' | 'targetId'>>
  update?: Array<OfferUpdateWithWhereUniqueWithoutOwnerInput>
  updateMany?: Array<OfferUpdateManyWithWhereWithoutOwnerInput>
  deleteMany?: Array<OfferScalarWhereInput>
}
export declare class OfferUpdateOneWithoutTargetNestedInput {
  create?: InstanceType<typeof OfferCreateWithoutTargetInput>
  connectOrCreate?: InstanceType<typeof OfferCreateOrConnectWithoutTargetInput>
  upsert?: InstanceType<typeof OfferUpsertWithoutTargetInput>
  disconnect?: InstanceType<typeof OfferWhereInput>
  delete?: InstanceType<typeof OfferWhereInput>
  connect?: Prisma.AtLeast<OfferWhereUniqueInput, 'id' | 'targetId'>
  update?: InstanceType<typeof OfferUpdateToOneWithWhereWithoutTargetInput>
}
export declare class OfferUpdateToOneWithWhereWithoutTargetInput {
  where?: InstanceType<typeof OfferWhereInput>
  data: InstanceType<typeof OfferUpdateWithoutTargetInput>
}
export declare class OfferUpdateWithWhereUniqueWithoutLoveInput {
  where: Prisma.AtLeast<OfferWhereUniqueInput, 'id' | 'targetId'>
  data: InstanceType<typeof OfferUpdateWithoutLoveInput>
}
export declare class OfferUpdateWithWhereUniqueWithoutOwnerInput {
  where: Prisma.AtLeast<OfferWhereUniqueInput, 'id' | 'targetId'>
  data: InstanceType<typeof OfferUpdateWithoutOwnerInput>
}
export declare class OfferUpdateWithoutLoveInput {
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>
  code?: InstanceType<typeof StringFieldUpdateOperationsInput>
  isUsed?: InstanceType<typeof BoolFieldUpdateOperationsInput>
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  owner?: InstanceType<
    typeof AccountUpdateOneRequiredWithoutOwnedOffersNestedInput
  >
  target?: InstanceType<typeof AccountUpdateOneRequiredWithoutOfferNestedInput>
}
export declare class OfferUpdateWithoutOwnerInput {
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>
  code?: InstanceType<typeof StringFieldUpdateOperationsInput>
  isUsed?: InstanceType<typeof BoolFieldUpdateOperationsInput>
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  love?: InstanceType<typeof LoveUpdateOneRequiredWithoutOfferNestedInput>
  target?: InstanceType<typeof AccountUpdateOneRequiredWithoutOfferNestedInput>
}
export declare class OfferUpdateWithoutTargetInput {
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>
  code?: InstanceType<typeof StringFieldUpdateOperationsInput>
  isUsed?: InstanceType<typeof BoolFieldUpdateOperationsInput>
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  love?: InstanceType<typeof LoveUpdateOneRequiredWithoutOfferNestedInput>
  owner?: InstanceType<
    typeof AccountUpdateOneRequiredWithoutOwnedOffersNestedInput
  >
}
export declare class OfferUpdateInput {
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>
  code?: InstanceType<typeof StringFieldUpdateOperationsInput>
  isUsed?: InstanceType<typeof BoolFieldUpdateOperationsInput>
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  love?: InstanceType<typeof LoveUpdateOneRequiredWithoutOfferNestedInput>
  owner?: InstanceType<
    typeof AccountUpdateOneRequiredWithoutOwnedOffersNestedInput
  >
  target?: InstanceType<typeof AccountUpdateOneRequiredWithoutOfferNestedInput>
}
export declare class OfferUpsertWithWhereUniqueWithoutLoveInput {
  where: Prisma.AtLeast<OfferWhereUniqueInput, 'id' | 'targetId'>
  update: InstanceType<typeof OfferUpdateWithoutLoveInput>
  create: InstanceType<typeof OfferCreateWithoutLoveInput>
}
export declare class OfferUpsertWithWhereUniqueWithoutOwnerInput {
  where: Prisma.AtLeast<OfferWhereUniqueInput, 'id' | 'targetId'>
  update: InstanceType<typeof OfferUpdateWithoutOwnerInput>
  create: InstanceType<typeof OfferCreateWithoutOwnerInput>
}
export declare class OfferUpsertWithoutTargetInput {
  update: InstanceType<typeof OfferUpdateWithoutTargetInput>
  create: InstanceType<typeof OfferCreateWithoutTargetInput>
  where?: InstanceType<typeof OfferWhereInput>
}
export declare class OfferWhereUniqueInput {
  id?: string
  targetId?: string
  AND?: Array<OfferWhereInput>
  OR?: Array<OfferWhereInput>
  NOT?: Array<OfferWhereInput>
  code?: InstanceType<typeof StringFilter>
  loveId?: InstanceType<typeof StringFilter>
  ownerId?: InstanceType<typeof StringFilter>
  isUsed?: InstanceType<typeof BoolFilter>
  createdAt?: InstanceType<typeof DateTimeFilter>
  updatedAt?: InstanceType<typeof DateTimeFilter>
  love?: InstanceType<typeof LoveRelationFilter>
  owner?: InstanceType<typeof AccountRelationFilter>
  target?: InstanceType<typeof AccountRelationFilter>
}
export declare class OfferWhereInput {
  AND?: Array<OfferWhereInput>
  OR?: Array<OfferWhereInput>
  NOT?: Array<OfferWhereInput>
  id?: InstanceType<typeof StringFilter>
  code?: InstanceType<typeof StringFilter>
  loveId?: InstanceType<typeof StringFilter>
  ownerId?: InstanceType<typeof StringFilter>
  targetId?: InstanceType<typeof StringFilter>
  isUsed?: InstanceType<typeof BoolFilter>
  createdAt?: InstanceType<typeof DateTimeFilter>
  updatedAt?: InstanceType<typeof DateTimeFilter>
  love?: InstanceType<typeof LoveRelationFilter>
  owner?: InstanceType<typeof AccountRelationFilter>
  target?: InstanceType<typeof AccountRelationFilter>
}
export declare class Offer {
  id: string
  code: string
  loveId: string
  ownerId: string
  targetId: string
  isUsed: boolean
  createdAt: Date
  updatedAt: Date
  love?: InstanceType<typeof Love>
  owner?: InstanceType<typeof Account>
  target?: InstanceType<typeof Account>
}
export declare class UpdateManyOfferArgs {
  data: InstanceType<typeof OfferUpdateManyMutationInput>
  where?: InstanceType<typeof OfferWhereInput>
}
export declare class UpdateOneOfferArgs {
  data: InstanceType<typeof OfferUpdateInput>
  where: Prisma.AtLeast<OfferWhereUniqueInput, 'id' | 'targetId'>
}
export declare class UpsertOneOfferArgs {
  where: Prisma.AtLeast<OfferWhereUniqueInput, 'id' | 'targetId'>
  create: InstanceType<typeof OfferCreateInput>
  update: InstanceType<typeof OfferUpdateInput>
}
export declare class AffectedRows {
  count: number
}
export declare class BoolFieldUpdateOperationsInput {
  set?: boolean
}
export declare class BoolFilter {
  equals?: boolean
  not?: InstanceType<typeof NestedBoolFilter>
}
export declare class BoolWithAggregatesFilter {
  equals?: boolean
  not?: InstanceType<typeof NestedBoolWithAggregatesFilter>
  _count?: InstanceType<typeof NestedIntFilter>
  _min?: InstanceType<typeof NestedBoolFilter>
  _max?: InstanceType<typeof NestedBoolFilter>
}
export declare class DateTimeFieldUpdateOperationsInput {
  set?: Date | string
}
export declare class DateTimeFilter {
  equals?: Date | string;
  in?: Array<Date> | Array<string>
  notIn?: Array<Date> | Array<string>
  lt?: Date | string
  lte?: Date | string
  gt?: Date | string
  gte?: Date | string
  not?: InstanceType<typeof NestedDateTimeFilter>
}
export declare class DateTimeNullableFilter {
  equals?: Date | string;
  in?: Array<Date> | Array<string>
  notIn?: Array<Date> | Array<string>
  lt?: Date | string
  lte?: Date | string
  gt?: Date | string
  gte?: Date | string
  not?: InstanceType<typeof NestedDateTimeNullableFilter>
}
export declare class DateTimeNullableWithAggregatesFilter {
  equals?: Date | string;
  in?: Array<Date> | Array<string>
  notIn?: Array<Date> | Array<string>
  lt?: Date | string
  lte?: Date | string
  gt?: Date | string
  gte?: Date | string
  not?: InstanceType<typeof NestedDateTimeNullableWithAggregatesFilter>
  _count?: InstanceType<typeof NestedIntNullableFilter>
  _min?: InstanceType<typeof NestedDateTimeNullableFilter>
  _max?: InstanceType<typeof NestedDateTimeNullableFilter>
}
export declare class DateTimeWithAggregatesFilter {
  equals?: Date | string;
  in?: Array<Date> | Array<string>
  notIn?: Array<Date> | Array<string>
  lt?: Date | string
  lte?: Date | string
  gt?: Date | string
  gte?: Date | string
  not?: InstanceType<typeof NestedDateTimeWithAggregatesFilter>
  _count?: InstanceType<typeof NestedIntFilter>
  _min?: InstanceType<typeof NestedDateTimeFilter>
  _max?: InstanceType<typeof NestedDateTimeFilter>
}
export declare class EnumGenderNullableFilter {
  equals?: keyof typeof Gender;
  in?: Array<keyof typeof Gender>
  notIn?: Array<keyof typeof Gender>
  not?: InstanceType<typeof NestedEnumGenderNullableFilter>
}
export declare class EnumGenderNullableWithAggregatesFilter {
  equals?: keyof typeof Gender;
  in?: Array<keyof typeof Gender>
  notIn?: Array<keyof typeof Gender>
  not?: InstanceType<typeof NestedEnumGenderNullableWithAggregatesFilter>
  _count?: InstanceType<typeof NestedIntNullableFilter>
  _min?: InstanceType<typeof NestedEnumGenderNullableFilter>
  _max?: InstanceType<typeof NestedEnumGenderNullableFilter>
}
export declare class EnumPermissionNullableListFilter {
  equals?: Array<keyof typeof Permission>
  has?: keyof typeof Permission
  hasEvery?: Array<keyof typeof Permission>
  hasSome?: Array<keyof typeof Permission>
  isEmpty?: boolean
}
export declare class EnumRoleNullableListFilter {
  equals?: Array<keyof typeof Role>
  has?: keyof typeof Role
  hasEvery?: Array<keyof typeof Role>
  hasSome?: Array<keyof typeof Role>
  isEmpty?: boolean
}
export declare class NestedBoolFilter {
  equals?: boolean
  not?: InstanceType<typeof NestedBoolFilter>
}
export declare class NestedBoolWithAggregatesFilter {
  equals?: boolean
  not?: InstanceType<typeof NestedBoolWithAggregatesFilter>
  _count?: InstanceType<typeof NestedIntFilter>
  _min?: InstanceType<typeof NestedBoolFilter>
  _max?: InstanceType<typeof NestedBoolFilter>
}
export declare class NestedDateTimeFilter {
  equals?: Date | string;
  in?: Array<Date> | Array<string>
  notIn?: Array<Date> | Array<string>
  lt?: Date | string
  lte?: Date | string
  gt?: Date | string
  gte?: Date | string
  not?: InstanceType<typeof NestedDateTimeFilter>
}
export declare class NestedDateTimeNullableFilter {
  equals?: Date | string;
  in?: Array<Date> | Array<string>
  notIn?: Array<Date> | Array<string>
  lt?: Date | string
  lte?: Date | string
  gt?: Date | string
  gte?: Date | string
  not?: InstanceType<typeof NestedDateTimeNullableFilter>
}
export declare class NestedDateTimeNullableWithAggregatesFilter {
  equals?: Date | string;
  in?: Array<Date> | Array<string>
  notIn?: Array<Date> | Array<string>
  lt?: Date | string
  lte?: Date | string
  gt?: Date | string
  gte?: Date | string
  not?: InstanceType<typeof NestedDateTimeNullableWithAggregatesFilter>
  _count?: InstanceType<typeof NestedIntNullableFilter>
  _min?: InstanceType<typeof NestedDateTimeNullableFilter>
  _max?: InstanceType<typeof NestedDateTimeNullableFilter>
}
export declare class NestedDateTimeWithAggregatesFilter {
  equals?: Date | string;
  in?: Array<Date> | Array<string>
  notIn?: Array<Date> | Array<string>
  lt?: Date | string
  lte?: Date | string
  gt?: Date | string
  gte?: Date | string
  not?: InstanceType<typeof NestedDateTimeWithAggregatesFilter>
  _count?: InstanceType<typeof NestedIntFilter>
  _min?: InstanceType<typeof NestedDateTimeFilter>
  _max?: InstanceType<typeof NestedDateTimeFilter>
}
export declare class NestedEnumGenderNullableFilter {
  equals?: keyof typeof Gender;
  in?: Array<keyof typeof Gender>
  notIn?: Array<keyof typeof Gender>
  not?: InstanceType<typeof NestedEnumGenderNullableFilter>
}
export declare class NestedEnumGenderNullableWithAggregatesFilter {
  equals?: keyof typeof Gender;
  in?: Array<keyof typeof Gender>
  notIn?: Array<keyof typeof Gender>
  not?: InstanceType<typeof NestedEnumGenderNullableWithAggregatesFilter>
  _count?: InstanceType<typeof NestedIntNullableFilter>
  _min?: InstanceType<typeof NestedEnumGenderNullableFilter>
  _max?: InstanceType<typeof NestedEnumGenderNullableFilter>
}
export declare class NestedIntFilter {
  equals?: number;
  in?: Array<number>
  notIn?: Array<number>
  lt?: number
  lte?: number
  gt?: number
  gte?: number
  not?: InstanceType<typeof NestedIntFilter>
}
export declare class NestedIntNullableFilter {
  equals?: number;
  in?: Array<number>
  notIn?: Array<number>
  lt?: number
  lte?: number
  gt?: number
  gte?: number
  not?: InstanceType<typeof NestedIntNullableFilter>
}
export declare class NestedStringFilter {
  equals?: string;
  in?: Array<string>
  notIn?: Array<string>
  lt?: string
  lte?: string
  gt?: string
  gte?: string
  contains?: string
  startsWith?: string
  endsWith?: string
  not?: InstanceType<typeof NestedStringFilter>
}
export declare class NestedStringNullableFilter {
  equals?: string;
  in?: Array<string>
  notIn?: Array<string>
  lt?: string
  lte?: string
  gt?: string
  gte?: string
  contains?: string
  startsWith?: string
  endsWith?: string
  not?: InstanceType<typeof NestedStringNullableFilter>
}
export declare class NestedStringNullableWithAggregatesFilter {
  equals?: string;
  in?: Array<string>
  notIn?: Array<string>
  lt?: string
  lte?: string
  gt?: string
  gte?: string
  contains?: string
  startsWith?: string
  endsWith?: string
  not?: InstanceType<typeof NestedStringNullableWithAggregatesFilter>
  _count?: InstanceType<typeof NestedIntNullableFilter>
  _min?: InstanceType<typeof NestedStringNullableFilter>
  _max?: InstanceType<typeof NestedStringNullableFilter>
}
export declare class NestedStringWithAggregatesFilter {
  equals?: string;
  in?: Array<string>
  notIn?: Array<string>
  lt?: string
  lte?: string
  gt?: string
  gte?: string
  contains?: string
  startsWith?: string
  endsWith?: string
  not?: InstanceType<typeof NestedStringWithAggregatesFilter>
  _count?: InstanceType<typeof NestedIntFilter>
  _min?: InstanceType<typeof NestedStringFilter>
  _max?: InstanceType<typeof NestedStringFilter>
}
export declare class NullableDateTimeFieldUpdateOperationsInput {
  set?: Date | string
}
export declare class NullableEnumGenderFieldUpdateOperationsInput {
  set?: keyof typeof Gender
}
export declare class NullableStringFieldUpdateOperationsInput {
  set?: string
}
export declare class SortOrderInput {
  sort: keyof typeof SortOrder
  nulls?: keyof typeof NullsOrder
}
export declare class StringFieldUpdateOperationsInput {
  set?: string
}
export declare class StringFilter {
  equals?: string;
  in?: Array<string>
  notIn?: Array<string>
  lt?: string
  lte?: string
  gt?: string
  gte?: string
  contains?: string
  startsWith?: string
  endsWith?: string
  mode?: keyof typeof QueryMode
  not?: InstanceType<typeof NestedStringFilter>
}
export declare class StringNullableFilter {
  equals?: string;
  in?: Array<string>
  notIn?: Array<string>
  lt?: string
  lte?: string
  gt?: string
  gte?: string
  contains?: string
  startsWith?: string
  endsWith?: string
  mode?: keyof typeof QueryMode
  not?: InstanceType<typeof NestedStringNullableFilter>
}
export declare class StringNullableWithAggregatesFilter {
  equals?: string;
  in?: Array<string>
  notIn?: Array<string>
  lt?: string
  lte?: string
  gt?: string
  gte?: string
  contains?: string
  startsWith?: string
  endsWith?: string
  mode?: keyof typeof QueryMode
  not?: InstanceType<typeof NestedStringNullableWithAggregatesFilter>
  _count?: InstanceType<typeof NestedIntNullableFilter>
  _min?: InstanceType<typeof NestedStringNullableFilter>
  _max?: InstanceType<typeof NestedStringNullableFilter>
}
export declare class StringWithAggregatesFilter {
  equals?: string;
  in?: Array<string>
  notIn?: Array<string>
  lt?: string
  lte?: string
  gt?: string
  gte?: string
  contains?: string
  startsWith?: string
  endsWith?: string
  mode?: keyof typeof QueryMode
  not?: InstanceType<typeof NestedStringWithAggregatesFilter>
  _count?: InstanceType<typeof NestedIntFilter>
  _min?: InstanceType<typeof NestedStringFilter>
  _max?: InstanceType<typeof NestedStringFilter>
}
export declare class AggregateReview {
  _count?: InstanceType<typeof ReviewCountAggregate>
  _min?: InstanceType<typeof ReviewMinAggregate>
  _max?: InstanceType<typeof ReviewMaxAggregate>
}
export declare class CreateManyReviewArgs {
  data: Array<ReviewCreateManyInput>
  skipDuplicates?: boolean
}
export declare class CreateOneReviewArgs {
  data: InstanceType<typeof ReviewCreateInput>
}
export declare class DeleteManyReviewArgs {
  where?: InstanceType<typeof ReviewWhereInput>
}
export declare class DeleteOneReviewArgs {
  where: Prisma.AtLeast<ReviewWhereUniqueInput, 'id' | 'eventId'>
}
export declare class FindFirstReviewOrThrowArgs {
  where?: InstanceType<typeof ReviewWhereInput>
  orderBy?: Array<ReviewOrderByWithRelationInput>
  cursor?: Prisma.AtLeast<ReviewWhereUniqueInput, 'id' | 'eventId'>
  take?: number
  skip?: number
  distinct?: Array<keyof typeof ReviewScalarFieldEnum>
}
export declare class FindFirstReviewArgs {
  where?: InstanceType<typeof ReviewWhereInput>
  orderBy?: Array<ReviewOrderByWithRelationInput>
  cursor?: Prisma.AtLeast<ReviewWhereUniqueInput, 'id' | 'eventId'>
  take?: number
  skip?: number
  distinct?: Array<keyof typeof ReviewScalarFieldEnum>
}
export declare class FindManyReviewArgs {
  where?: InstanceType<typeof ReviewWhereInput>
  orderBy?: Array<ReviewOrderByWithRelationInput>
  cursor?: Prisma.AtLeast<ReviewWhereUniqueInput, 'id' | 'eventId'>
  take?: number
  skip?: number
  distinct?: Array<keyof typeof ReviewScalarFieldEnum>
}
export declare class FindUniqueReviewOrThrowArgs {
  where: Prisma.AtLeast<ReviewWhereUniqueInput, 'id' | 'eventId'>
}
export declare class FindUniqueReviewArgs {
  where: Prisma.AtLeast<ReviewWhereUniqueInput, 'id' | 'eventId'>
}
export declare class ReviewAggregateArgs {
  where?: InstanceType<typeof ReviewWhereInput>
  orderBy?: Array<ReviewOrderByWithRelationInput>
  cursor?: Prisma.AtLeast<ReviewWhereUniqueInput, 'id' | 'eventId'>
  take?: number
  skip?: number
  _count?: InstanceType<typeof ReviewCountAggregateInput>
  _min?: InstanceType<typeof ReviewMinAggregateInput>
  _max?: InstanceType<typeof ReviewMaxAggregateInput>
}
export declare class ReviewCountAggregateInput {
  id?: true
  text?: true
  permissions?: true
  authorId?: true
  eventId?: true
  createdAt?: true
  updatedAt?: true
  _all?: true
}
export declare class ReviewCountAggregate {
  id: number
  text: number
  permissions: number
  authorId: number
  eventId: number
  createdAt: number
  updatedAt: number
  _all: number
}
export declare class ReviewCountOrderByAggregateInput {
  id?: keyof typeof SortOrder
  text?: keyof typeof SortOrder
  permissions?: keyof typeof SortOrder
  authorId?: keyof typeof SortOrder
  eventId?: keyof typeof SortOrder
  createdAt?: keyof typeof SortOrder
  updatedAt?: keyof typeof SortOrder
}
export declare class ReviewCreateManyAuthorInputEnvelope {
  data: Array<ReviewCreateManyAuthorInput>
  skipDuplicates?: boolean
}
export declare class ReviewCreateManyAuthorInput {
  id?: string
  text: string
  permissions?: InstanceType<typeof ReviewCreatepermissionsInput>
  eventId: string
  createdAt?: Date | string
  updatedAt?: Date | string
}
export declare class ReviewCreateManyEventInputEnvelope {
  data: Array<ReviewCreateManyEventInput>
  skipDuplicates?: boolean
}
export declare class ReviewCreateManyEventInput {
  id?: string
  text: string
  permissions?: InstanceType<typeof ReviewCreatepermissionsInput>
  authorId: string
  createdAt?: Date | string
  updatedAt?: Date | string
}
export declare class ReviewCreateManyInput {
  id?: string
  text: string
  permissions?: InstanceType<typeof ReviewCreatepermissionsInput>
  authorId: string
  eventId: string
  createdAt?: Date | string
  updatedAt?: Date | string
}
export declare class ReviewCreateNestedManyWithoutAuthorInput {
  create?: Array<ReviewCreateWithoutAuthorInput>
  connectOrCreate?: Array<ReviewCreateOrConnectWithoutAuthorInput>
  createMany?: InstanceType<typeof ReviewCreateManyAuthorInputEnvelope>
  connect?: Array<Prisma.AtLeast<ReviewWhereUniqueInput, 'id' | 'eventId'>>
}
export declare class ReviewCreateNestedManyWithoutEventInput {
  create?: Array<ReviewCreateWithoutEventInput>
  connectOrCreate?: Array<ReviewCreateOrConnectWithoutEventInput>
  createMany?: InstanceType<typeof ReviewCreateManyEventInputEnvelope>
  connect?: Array<Prisma.AtLeast<ReviewWhereUniqueInput, 'id' | 'eventId'>>
}
export declare class ReviewCreateOrConnectWithoutAuthorInput {
  where: Prisma.AtLeast<ReviewWhereUniqueInput, 'id' | 'eventId'>
  create: InstanceType<typeof ReviewCreateWithoutAuthorInput>
}
export declare class ReviewCreateOrConnectWithoutEventInput {
  where: Prisma.AtLeast<ReviewWhereUniqueInput, 'id' | 'eventId'>
  create: InstanceType<typeof ReviewCreateWithoutEventInput>
}
export declare class ReviewCreateWithoutAuthorInput {
  id?: string
  text: string
  permissions?: InstanceType<typeof ReviewCreatepermissionsInput>
  createdAt?: Date | string
  updatedAt?: Date | string
  event: InstanceType<typeof EventCreateNestedOneWithoutReviewsInput>
}
export declare class ReviewCreateWithoutEventInput {
  id?: string
  text: string
  permissions?: InstanceType<typeof ReviewCreatepermissionsInput>
  createdAt?: Date | string
  updatedAt?: Date | string
  author: InstanceType<typeof AccountCreateNestedOneWithoutOwnedReviewsInput>
}
export declare class ReviewCreateInput {
  id?: string
  text: string
  permissions?: InstanceType<typeof ReviewCreatepermissionsInput>
  createdAt?: Date | string
  updatedAt?: Date | string
  author: InstanceType<typeof AccountCreateNestedOneWithoutOwnedReviewsInput>
  event: InstanceType<typeof EventCreateNestedOneWithoutReviewsInput>
}
export declare class ReviewCreatepermissionsInput {
  set: Array<keyof typeof Permission>
}
export declare class ReviewGroupByArgs {
  where?: InstanceType<typeof ReviewWhereInput>
  orderBy?: Array<ReviewOrderByWithAggregationInput>
  by: Array<keyof typeof ReviewScalarFieldEnum>
  having?: InstanceType<typeof ReviewScalarWhereWithAggregatesInput>
  take?: number
  skip?: number
  _count?: InstanceType<typeof ReviewCountAggregateInput>
  _min?: InstanceType<typeof ReviewMinAggregateInput>
  _max?: InstanceType<typeof ReviewMaxAggregateInput>
}
export declare class ReviewGroupBy {
  id: string
  text: string
  permissions?: Array<keyof typeof Permission>
  authorId: string
  eventId: string
  createdAt: Date | string
  updatedAt: Date | string
  _count?: InstanceType<typeof ReviewCountAggregate>
  _min?: InstanceType<typeof ReviewMinAggregate>
  _max?: InstanceType<typeof ReviewMaxAggregate>
}
export declare class ReviewListRelationFilter {
  every?: InstanceType<typeof ReviewWhereInput>
  some?: InstanceType<typeof ReviewWhereInput>
  none?: InstanceType<typeof ReviewWhereInput>
}
export declare class ReviewMaxAggregateInput {
  id?: true
  text?: true
  authorId?: true
  eventId?: true
  createdAt?: true
  updatedAt?: true
}
export declare class ReviewMaxAggregate {
  id?: string
  text?: string
  authorId?: string
  eventId?: string
  createdAt?: Date | string
  updatedAt?: Date | string
}
export declare class ReviewMaxOrderByAggregateInput {
  id?: keyof typeof SortOrder
  text?: keyof typeof SortOrder
  authorId?: keyof typeof SortOrder
  eventId?: keyof typeof SortOrder
  createdAt?: keyof typeof SortOrder
  updatedAt?: keyof typeof SortOrder
}
export declare class ReviewMinAggregateInput {
  id?: true
  text?: true
  authorId?: true
  eventId?: true
  createdAt?: true
  updatedAt?: true
}
export declare class ReviewMinAggregate {
  id?: string
  text?: string
  authorId?: string
  eventId?: string
  createdAt?: Date | string
  updatedAt?: Date | string
}
export declare class ReviewMinOrderByAggregateInput {
  id?: keyof typeof SortOrder
  text?: keyof typeof SortOrder
  authorId?: keyof typeof SortOrder
  eventId?: keyof typeof SortOrder
  createdAt?: keyof typeof SortOrder
  updatedAt?: keyof typeof SortOrder
}
export declare class ReviewOrderByRelationAggregateInput {
  _count?: keyof typeof SortOrder
}
export declare class ReviewOrderByWithAggregationInput {
  id?: keyof typeof SortOrder
  text?: keyof typeof SortOrder
  permissions?: keyof typeof SortOrder
  authorId?: keyof typeof SortOrder
  eventId?: keyof typeof SortOrder
  createdAt?: keyof typeof SortOrder
  updatedAt?: keyof typeof SortOrder
  _count?: InstanceType<typeof ReviewCountOrderByAggregateInput>
  _max?: InstanceType<typeof ReviewMaxOrderByAggregateInput>
  _min?: InstanceType<typeof ReviewMinOrderByAggregateInput>
}
export declare class ReviewOrderByWithRelationInput {
  id?: keyof typeof SortOrder
  text?: keyof typeof SortOrder
  permissions?: keyof typeof SortOrder
  authorId?: keyof typeof SortOrder
  eventId?: keyof typeof SortOrder
  createdAt?: keyof typeof SortOrder
  updatedAt?: keyof typeof SortOrder
  author?: InstanceType<typeof AccountOrderByWithRelationInput>
  event?: InstanceType<typeof EventOrderByWithRelationInput>
}
export declare class ReviewScalarWhereWithAggregatesInput {
  AND?: Array<ReviewScalarWhereWithAggregatesInput>
  OR?: Array<ReviewScalarWhereWithAggregatesInput>
  NOT?: Array<ReviewScalarWhereWithAggregatesInput>
  id?: InstanceType<typeof StringWithAggregatesFilter>
  text?: InstanceType<typeof StringWithAggregatesFilter>
  permissions?: InstanceType<typeof EnumPermissionNullableListFilter>
  authorId?: InstanceType<typeof StringWithAggregatesFilter>
  eventId?: InstanceType<typeof StringWithAggregatesFilter>
  createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>
  updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>
}
export declare class ReviewScalarWhereInput {
  AND?: Array<ReviewScalarWhereInput>
  OR?: Array<ReviewScalarWhereInput>
  NOT?: Array<ReviewScalarWhereInput>
  id?: InstanceType<typeof StringFilter>
  text?: InstanceType<typeof StringFilter>
  permissions?: InstanceType<typeof EnumPermissionNullableListFilter>
  authorId?: InstanceType<typeof StringFilter>
  eventId?: InstanceType<typeof StringFilter>
  createdAt?: InstanceType<typeof DateTimeFilter>
  updatedAt?: InstanceType<typeof DateTimeFilter>
}
export declare class ReviewUncheckedCreateNestedManyWithoutAuthorInput {
  create?: Array<ReviewCreateWithoutAuthorInput>
  connectOrCreate?: Array<ReviewCreateOrConnectWithoutAuthorInput>
  createMany?: InstanceType<typeof ReviewCreateManyAuthorInputEnvelope>
  connect?: Array<Prisma.AtLeast<ReviewWhereUniqueInput, 'id' | 'eventId'>>
}
export declare class ReviewUncheckedCreateNestedManyWithoutEventInput {
  create?: Array<ReviewCreateWithoutEventInput>
  connectOrCreate?: Array<ReviewCreateOrConnectWithoutEventInput>
  createMany?: InstanceType<typeof ReviewCreateManyEventInputEnvelope>
  connect?: Array<Prisma.AtLeast<ReviewWhereUniqueInput, 'id' | 'eventId'>>
}
export declare class ReviewUncheckedCreateWithoutAuthorInput {
  id?: string
  text: string
  permissions?: InstanceType<typeof ReviewCreatepermissionsInput>
  eventId: string
  createdAt?: Date | string
  updatedAt?: Date | string
}
export declare class ReviewUncheckedCreateWithoutEventInput {
  id?: string
  text: string
  permissions?: InstanceType<typeof ReviewCreatepermissionsInput>
  authorId: string
  createdAt?: Date | string
  updatedAt?: Date | string
}
export declare class ReviewUncheckedCreateInput {
  id?: string
  text: string
  permissions?: InstanceType<typeof ReviewCreatepermissionsInput>
  authorId: string
  eventId: string
  createdAt?: Date | string
  updatedAt?: Date | string
}
export declare class ReviewUncheckedUpdateManyWithoutAuthorNestedInput {
  create?: Array<ReviewCreateWithoutAuthorInput>
  connectOrCreate?: Array<ReviewCreateOrConnectWithoutAuthorInput>
  upsert?: Array<ReviewUpsertWithWhereUniqueWithoutAuthorInput>
  createMany?: InstanceType<typeof ReviewCreateManyAuthorInputEnvelope>
  set?: Array<Prisma.AtLeast<ReviewWhereUniqueInput, 'id' | 'eventId'>>
  disconnect?: Array<Prisma.AtLeast<ReviewWhereUniqueInput, 'id' | 'eventId'>>
  delete?: Array<Prisma.AtLeast<ReviewWhereUniqueInput, 'id' | 'eventId'>>
  connect?: Array<Prisma.AtLeast<ReviewWhereUniqueInput, 'id' | 'eventId'>>
  update?: Array<ReviewUpdateWithWhereUniqueWithoutAuthorInput>
  updateMany?: Array<ReviewUpdateManyWithWhereWithoutAuthorInput>
  deleteMany?: Array<ReviewScalarWhereInput>
}
export declare class ReviewUncheckedUpdateManyWithoutAuthorInput {
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>
  text?: InstanceType<typeof StringFieldUpdateOperationsInput>
  permissions?: InstanceType<typeof ReviewUpdatepermissionsInput>
  eventId?: InstanceType<typeof StringFieldUpdateOperationsInput>
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
}
export declare class ReviewUncheckedUpdateManyWithoutEventNestedInput {
  create?: Array<ReviewCreateWithoutEventInput>
  connectOrCreate?: Array<ReviewCreateOrConnectWithoutEventInput>
  upsert?: Array<ReviewUpsertWithWhereUniqueWithoutEventInput>
  createMany?: InstanceType<typeof ReviewCreateManyEventInputEnvelope>
  set?: Array<Prisma.AtLeast<ReviewWhereUniqueInput, 'id' | 'eventId'>>
  disconnect?: Array<Prisma.AtLeast<ReviewWhereUniqueInput, 'id' | 'eventId'>>
  delete?: Array<Prisma.AtLeast<ReviewWhereUniqueInput, 'id' | 'eventId'>>
  connect?: Array<Prisma.AtLeast<ReviewWhereUniqueInput, 'id' | 'eventId'>>
  update?: Array<ReviewUpdateWithWhereUniqueWithoutEventInput>
  updateMany?: Array<ReviewUpdateManyWithWhereWithoutEventInput>
  deleteMany?: Array<ReviewScalarWhereInput>
}
export declare class ReviewUncheckedUpdateManyWithoutEventInput {
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>
  text?: InstanceType<typeof StringFieldUpdateOperationsInput>
  permissions?: InstanceType<typeof ReviewUpdatepermissionsInput>
  authorId?: InstanceType<typeof StringFieldUpdateOperationsInput>
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
}
export declare class ReviewUncheckedUpdateManyInput {
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>
  text?: InstanceType<typeof StringFieldUpdateOperationsInput>
  permissions?: InstanceType<typeof ReviewUpdatepermissionsInput>
  authorId?: InstanceType<typeof StringFieldUpdateOperationsInput>
  eventId?: InstanceType<typeof StringFieldUpdateOperationsInput>
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
}
export declare class ReviewUncheckedUpdateWithoutAuthorInput {
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>
  text?: InstanceType<typeof StringFieldUpdateOperationsInput>
  permissions?: InstanceType<typeof ReviewUpdatepermissionsInput>
  eventId?: InstanceType<typeof StringFieldUpdateOperationsInput>
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
}
export declare class ReviewUncheckedUpdateWithoutEventInput {
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>
  text?: InstanceType<typeof StringFieldUpdateOperationsInput>
  permissions?: InstanceType<typeof ReviewUpdatepermissionsInput>
  authorId?: InstanceType<typeof StringFieldUpdateOperationsInput>
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
}
export declare class ReviewUncheckedUpdateInput {
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>
  text?: InstanceType<typeof StringFieldUpdateOperationsInput>
  permissions?: InstanceType<typeof ReviewUpdatepermissionsInput>
  authorId?: InstanceType<typeof StringFieldUpdateOperationsInput>
  eventId?: InstanceType<typeof StringFieldUpdateOperationsInput>
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
}
export declare class ReviewUpdateManyMutationInput {
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>
  text?: InstanceType<typeof StringFieldUpdateOperationsInput>
  permissions?: InstanceType<typeof ReviewUpdatepermissionsInput>
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
}
export declare class ReviewUpdateManyWithWhereWithoutAuthorInput {
  where: InstanceType<typeof ReviewScalarWhereInput>
  data: InstanceType<typeof ReviewUpdateManyMutationInput>
}
export declare class ReviewUpdateManyWithWhereWithoutEventInput {
  where: InstanceType<typeof ReviewScalarWhereInput>
  data: InstanceType<typeof ReviewUpdateManyMutationInput>
}
export declare class ReviewUpdateManyWithoutAuthorNestedInput {
  create?: Array<ReviewCreateWithoutAuthorInput>
  connectOrCreate?: Array<ReviewCreateOrConnectWithoutAuthorInput>
  upsert?: Array<ReviewUpsertWithWhereUniqueWithoutAuthorInput>
  createMany?: InstanceType<typeof ReviewCreateManyAuthorInputEnvelope>
  set?: Array<Prisma.AtLeast<ReviewWhereUniqueInput, 'id' | 'eventId'>>
  disconnect?: Array<Prisma.AtLeast<ReviewWhereUniqueInput, 'id' | 'eventId'>>
  delete?: Array<Prisma.AtLeast<ReviewWhereUniqueInput, 'id' | 'eventId'>>
  connect?: Array<Prisma.AtLeast<ReviewWhereUniqueInput, 'id' | 'eventId'>>
  update?: Array<ReviewUpdateWithWhereUniqueWithoutAuthorInput>
  updateMany?: Array<ReviewUpdateManyWithWhereWithoutAuthorInput>
  deleteMany?: Array<ReviewScalarWhereInput>
}
export declare class ReviewUpdateManyWithoutEventNestedInput {
  create?: Array<ReviewCreateWithoutEventInput>
  connectOrCreate?: Array<ReviewCreateOrConnectWithoutEventInput>
  upsert?: Array<ReviewUpsertWithWhereUniqueWithoutEventInput>
  createMany?: InstanceType<typeof ReviewCreateManyEventInputEnvelope>
  set?: Array<Prisma.AtLeast<ReviewWhereUniqueInput, 'id' | 'eventId'>>
  disconnect?: Array<Prisma.AtLeast<ReviewWhereUniqueInput, 'id' | 'eventId'>>
  delete?: Array<Prisma.AtLeast<ReviewWhereUniqueInput, 'id' | 'eventId'>>
  connect?: Array<Prisma.AtLeast<ReviewWhereUniqueInput, 'id' | 'eventId'>>
  update?: Array<ReviewUpdateWithWhereUniqueWithoutEventInput>
  updateMany?: Array<ReviewUpdateManyWithWhereWithoutEventInput>
  deleteMany?: Array<ReviewScalarWhereInput>
}
export declare class ReviewUpdateWithWhereUniqueWithoutAuthorInput {
  where: Prisma.AtLeast<ReviewWhereUniqueInput, 'id' | 'eventId'>
  data: InstanceType<typeof ReviewUpdateWithoutAuthorInput>
}
export declare class ReviewUpdateWithWhereUniqueWithoutEventInput {
  where: Prisma.AtLeast<ReviewWhereUniqueInput, 'id' | 'eventId'>
  data: InstanceType<typeof ReviewUpdateWithoutEventInput>
}
export declare class ReviewUpdateWithoutAuthorInput {
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>
  text?: InstanceType<typeof StringFieldUpdateOperationsInput>
  permissions?: InstanceType<typeof ReviewUpdatepermissionsInput>
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  event?: InstanceType<typeof EventUpdateOneRequiredWithoutReviewsNestedInput>
}
export declare class ReviewUpdateWithoutEventInput {
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>
  text?: InstanceType<typeof StringFieldUpdateOperationsInput>
  permissions?: InstanceType<typeof ReviewUpdatepermissionsInput>
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  author?: InstanceType<
    typeof AccountUpdateOneRequiredWithoutOwnedReviewsNestedInput
  >
}
export declare class ReviewUpdateInput {
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>
  text?: InstanceType<typeof StringFieldUpdateOperationsInput>
  permissions?: InstanceType<typeof ReviewUpdatepermissionsInput>
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  author?: InstanceType<
    typeof AccountUpdateOneRequiredWithoutOwnedReviewsNestedInput
  >
  event?: InstanceType<typeof EventUpdateOneRequiredWithoutReviewsNestedInput>
}
export declare class ReviewUpdatepermissionsInput {
  set?: Array<keyof typeof Permission>
  push?: Array<keyof typeof Permission>
}
export declare class ReviewUpsertWithWhereUniqueWithoutAuthorInput {
  where: Prisma.AtLeast<ReviewWhereUniqueInput, 'id' | 'eventId'>
  update: InstanceType<typeof ReviewUpdateWithoutAuthorInput>
  create: InstanceType<typeof ReviewCreateWithoutAuthorInput>
}
export declare class ReviewUpsertWithWhereUniqueWithoutEventInput {
  where: Prisma.AtLeast<ReviewWhereUniqueInput, 'id' | 'eventId'>
  update: InstanceType<typeof ReviewUpdateWithoutEventInput>
  create: InstanceType<typeof ReviewCreateWithoutEventInput>
}
export declare class ReviewWhereUniqueInput {
  id?: string
  eventId?: string
  AND?: Array<ReviewWhereInput>
  OR?: Array<ReviewWhereInput>
  NOT?: Array<ReviewWhereInput>
  text?: InstanceType<typeof StringFilter>
  permissions?: InstanceType<typeof EnumPermissionNullableListFilter>
  authorId?: InstanceType<typeof StringFilter>
  createdAt?: InstanceType<typeof DateTimeFilter>
  updatedAt?: InstanceType<typeof DateTimeFilter>
  author?: InstanceType<typeof AccountRelationFilter>
  event?: InstanceType<typeof EventRelationFilter>
}
export declare class ReviewWhereInput {
  AND?: Array<ReviewWhereInput>
  OR?: Array<ReviewWhereInput>
  NOT?: Array<ReviewWhereInput>
  id?: InstanceType<typeof StringFilter>
  text?: InstanceType<typeof StringFilter>
  permissions?: InstanceType<typeof EnumPermissionNullableListFilter>
  authorId?: InstanceType<typeof StringFilter>
  eventId?: InstanceType<typeof StringFilter>
  createdAt?: InstanceType<typeof DateTimeFilter>
  updatedAt?: InstanceType<typeof DateTimeFilter>
  author?: InstanceType<typeof AccountRelationFilter>
  event?: InstanceType<typeof EventRelationFilter>
}
export declare class Review {
  id: string
  text: string
  permissions: Array<keyof typeof Permission>
  authorId: string
  eventId: string
  createdAt: Date
  updatedAt: Date
  author?: InstanceType<typeof Account>
  event?: InstanceType<typeof Event>
}
export declare class UpdateManyReviewArgs {
  data: InstanceType<typeof ReviewUpdateManyMutationInput>
  where?: InstanceType<typeof ReviewWhereInput>
}
export declare class UpdateOneReviewArgs {
  data: InstanceType<typeof ReviewUpdateInput>
  where: Prisma.AtLeast<ReviewWhereUniqueInput, 'id' | 'eventId'>
}
export declare class UpsertOneReviewArgs {
  where: Prisma.AtLeast<ReviewWhereUniqueInput, 'id' | 'eventId'>
  create: InstanceType<typeof ReviewCreateInput>
  update: InstanceType<typeof ReviewUpdateInput>
}
export declare class AggregateUpload {
  _count?: InstanceType<typeof UploadCountAggregate>
  _min?: InstanceType<typeof UploadMinAggregate>
  _max?: InstanceType<typeof UploadMaxAggregate>
}
export declare class CreateManyUploadArgs {
  data: Array<UploadCreateManyInput>
  skipDuplicates?: boolean
}
export declare class CreateOneUploadArgs {
  data: InstanceType<typeof UploadCreateInput>
}
export declare class DeleteManyUploadArgs {
  where?: InstanceType<typeof UploadWhereInput>
}
export declare class DeleteOneUploadArgs {
  where: Prisma.AtLeast<UploadWhereUniqueInput, 'id'>
}
export declare class FindFirstUploadOrThrowArgs {
  where?: InstanceType<typeof UploadWhereInput>
  orderBy?: Array<UploadOrderByWithRelationInput>
  cursor?: Prisma.AtLeast<UploadWhereUniqueInput, 'id'>
  take?: number
  skip?: number
  distinct?: Array<keyof typeof UploadScalarFieldEnum>
}
export declare class FindFirstUploadArgs {
  where?: InstanceType<typeof UploadWhereInput>
  orderBy?: Array<UploadOrderByWithRelationInput>
  cursor?: Prisma.AtLeast<UploadWhereUniqueInput, 'id'>
  take?: number
  skip?: number
  distinct?: Array<keyof typeof UploadScalarFieldEnum>
}
export declare class FindManyUploadArgs {
  where?: InstanceType<typeof UploadWhereInput>
  orderBy?: Array<UploadOrderByWithRelationInput>
  cursor?: Prisma.AtLeast<UploadWhereUniqueInput, 'id'>
  take?: number
  skip?: number
  distinct?: Array<keyof typeof UploadScalarFieldEnum>
}
export declare class FindUniqueUploadOrThrowArgs {
  where: Prisma.AtLeast<UploadWhereUniqueInput, 'id'>
}
export declare class FindUniqueUploadArgs {
  where: Prisma.AtLeast<UploadWhereUniqueInput, 'id'>
}
export declare class UpdateManyUploadArgs {
  data: InstanceType<typeof UploadUpdateManyMutationInput>
  where?: InstanceType<typeof UploadWhereInput>
}
export declare class UpdateOneUploadArgs {
  data: InstanceType<typeof UploadUpdateInput>
  where: Prisma.AtLeast<UploadWhereUniqueInput, 'id'>
}
export declare class UploadAggregateArgs {
  where?: InstanceType<typeof UploadWhereInput>
  orderBy?: Array<UploadOrderByWithRelationInput>
  cursor?: Prisma.AtLeast<UploadWhereUniqueInput, 'id'>
  take?: number
  skip?: number
  _count?: InstanceType<typeof UploadCountAggregateInput>
  _min?: InstanceType<typeof UploadMinAggregateInput>
  _max?: InstanceType<typeof UploadMaxAggregateInput>
}
export declare class UploadCountAggregateInput {
  id?: true
  name?: true
  ext?: true
  url?: true
  permissions?: true
  ownerId?: true
  eventId?: true
  createdAt?: true
  _all?: true
}
export declare class UploadCountAggregate {
  id: number
  name: number
  ext: number
  url: number
  permissions: number
  ownerId: number
  eventId: number
  createdAt: number
  _all: number
}
export declare class UploadCountOrderByAggregateInput {
  id?: keyof typeof SortOrder
  name?: keyof typeof SortOrder
  ext?: keyof typeof SortOrder
  url?: keyof typeof SortOrder
  permissions?: keyof typeof SortOrder
  ownerId?: keyof typeof SortOrder
  eventId?: keyof typeof SortOrder
  createdAt?: keyof typeof SortOrder
}
export declare class UploadCount {
  events?: number
  accounts?: number
  chats?: number
  messages?: number
}
export declare class UploadCreateManyEventInputEnvelope {
  data: Array<UploadCreateManyEventInput>
  skipDuplicates?: boolean
}
export declare class UploadCreateManyEventInput {
  id?: string
  name: string
  ext: string
  url: string
  permissions?: InstanceType<typeof UploadCreatepermissionsInput>
  ownerId: string
  createdAt?: Date | string
}
export declare class UploadCreateManyOwnerInputEnvelope {
  data: Array<UploadCreateManyOwnerInput>
  skipDuplicates?: boolean
}
export declare class UploadCreateManyOwnerInput {
  id?: string
  name: string
  ext: string
  url: string
  permissions?: InstanceType<typeof UploadCreatepermissionsInput>
  eventId?: string
  createdAt?: Date | string
}
export declare class UploadCreateManyInput {
  id?: string
  name: string
  ext: string
  url: string
  permissions?: InstanceType<typeof UploadCreatepermissionsInput>
  ownerId: string
  eventId?: string
  createdAt?: Date | string
}
export declare class UploadCreateNestedManyWithoutEventInput {
  create?: Array<UploadCreateWithoutEventInput>
  connectOrCreate?: Array<UploadCreateOrConnectWithoutEventInput>
  createMany?: InstanceType<typeof UploadCreateManyEventInputEnvelope>
  connect?: Array<Prisma.AtLeast<UploadWhereUniqueInput, 'id'>>
}
export declare class UploadCreateNestedManyWithoutMessagesInput {
  create?: Array<UploadCreateWithoutMessagesInput>
  connectOrCreate?: Array<UploadCreateOrConnectWithoutMessagesInput>
  connect?: Array<Prisma.AtLeast<UploadWhereUniqueInput, 'id'>>
}
export declare class UploadCreateNestedManyWithoutOwnerInput {
  create?: Array<UploadCreateWithoutOwnerInput>
  connectOrCreate?: Array<UploadCreateOrConnectWithoutOwnerInput>
  createMany?: InstanceType<typeof UploadCreateManyOwnerInputEnvelope>
  connect?: Array<Prisma.AtLeast<UploadWhereUniqueInput, 'id'>>
}
export declare class UploadCreateNestedOneWithoutAccountsInput {
  create?: InstanceType<typeof UploadCreateWithoutAccountsInput>
  connectOrCreate?: InstanceType<
    typeof UploadCreateOrConnectWithoutAccountsInput
  >
  connect?: Prisma.AtLeast<UploadWhereUniqueInput, 'id'>
}
export declare class UploadCreateNestedOneWithoutChatsInput {
  create?: InstanceType<typeof UploadCreateWithoutChatsInput>
  connectOrCreate?: InstanceType<typeof UploadCreateOrConnectWithoutChatsInput>
  connect?: Prisma.AtLeast<UploadWhereUniqueInput, 'id'>
}
export declare class UploadCreateNestedOneWithoutEventsInput {
  create?: InstanceType<typeof UploadCreateWithoutEventsInput>
  connectOrCreate?: InstanceType<typeof UploadCreateOrConnectWithoutEventsInput>
  connect?: Prisma.AtLeast<UploadWhereUniqueInput, 'id'>
}
export declare class UploadCreateOrConnectWithoutAccountsInput {
  where: Prisma.AtLeast<UploadWhereUniqueInput, 'id'>
  create: InstanceType<typeof UploadCreateWithoutAccountsInput>
}
export declare class UploadCreateOrConnectWithoutChatsInput {
  where: Prisma.AtLeast<UploadWhereUniqueInput, 'id'>
  create: InstanceType<typeof UploadCreateWithoutChatsInput>
}
export declare class UploadCreateOrConnectWithoutEventInput {
  where: Prisma.AtLeast<UploadWhereUniqueInput, 'id'>
  create: InstanceType<typeof UploadCreateWithoutEventInput>
}
export declare class UploadCreateOrConnectWithoutEventsInput {
  where: Prisma.AtLeast<UploadWhereUniqueInput, 'id'>
  create: InstanceType<typeof UploadCreateWithoutEventsInput>
}
export declare class UploadCreateOrConnectWithoutMessagesInput {
  where: Prisma.AtLeast<UploadWhereUniqueInput, 'id'>
  create: InstanceType<typeof UploadCreateWithoutMessagesInput>
}
export declare class UploadCreateOrConnectWithoutOwnerInput {
  where: Prisma.AtLeast<UploadWhereUniqueInput, 'id'>
  create: InstanceType<typeof UploadCreateWithoutOwnerInput>
}
export declare class UploadCreateWithoutAccountsInput {
  id?: string
  name: string
  ext: string
  url: string
  permissions?: InstanceType<typeof UploadCreatepermissionsInput>
  createdAt?: Date | string
  owner: InstanceType<typeof AccountCreateNestedOneWithoutUploadsInput>
  event?: InstanceType<typeof EventCreateNestedOneWithoutUploadsInput>
  events?: InstanceType<typeof EventCreateNestedManyWithoutPicInput>
  chats?: InstanceType<typeof ChatCreateNestedManyWithoutPicInput>
  messages?: InstanceType<typeof MessageCreateNestedManyWithoutUploadsInput>
}
export declare class UploadCreateWithoutChatsInput {
  id?: string
  name: string
  ext: string
  url: string
  permissions?: InstanceType<typeof UploadCreatepermissionsInput>
  createdAt?: Date | string
  owner: InstanceType<typeof AccountCreateNestedOneWithoutUploadsInput>
  event?: InstanceType<typeof EventCreateNestedOneWithoutUploadsInput>
  events?: InstanceType<typeof EventCreateNestedManyWithoutPicInput>
  accounts?: InstanceType<typeof AccountCreateNestedManyWithoutAvatarInput>
  messages?: InstanceType<typeof MessageCreateNestedManyWithoutUploadsInput>
}
export declare class UploadCreateWithoutEventInput {
  id?: string
  name: string
  ext: string
  url: string
  permissions?: InstanceType<typeof UploadCreatepermissionsInput>
  createdAt?: Date | string
  owner: InstanceType<typeof AccountCreateNestedOneWithoutUploadsInput>
  events?: InstanceType<typeof EventCreateNestedManyWithoutPicInput>
  accounts?: InstanceType<typeof AccountCreateNestedManyWithoutAvatarInput>
  chats?: InstanceType<typeof ChatCreateNestedManyWithoutPicInput>
  messages?: InstanceType<typeof MessageCreateNestedManyWithoutUploadsInput>
}
export declare class UploadCreateWithoutEventsInput {
  id?: string
  name: string
  ext: string
  url: string
  permissions?: InstanceType<typeof UploadCreatepermissionsInput>
  createdAt?: Date | string
  owner: InstanceType<typeof AccountCreateNestedOneWithoutUploadsInput>
  event?: InstanceType<typeof EventCreateNestedOneWithoutUploadsInput>
  accounts?: InstanceType<typeof AccountCreateNestedManyWithoutAvatarInput>
  chats?: InstanceType<typeof ChatCreateNestedManyWithoutPicInput>
  messages?: InstanceType<typeof MessageCreateNestedManyWithoutUploadsInput>
}
export declare class UploadCreateWithoutMessagesInput {
  id?: string
  name: string
  ext: string
  url: string
  permissions?: InstanceType<typeof UploadCreatepermissionsInput>
  createdAt?: Date | string
  owner: InstanceType<typeof AccountCreateNestedOneWithoutUploadsInput>
  event?: InstanceType<typeof EventCreateNestedOneWithoutUploadsInput>
  events?: InstanceType<typeof EventCreateNestedManyWithoutPicInput>
  accounts?: InstanceType<typeof AccountCreateNestedManyWithoutAvatarInput>
  chats?: InstanceType<typeof ChatCreateNestedManyWithoutPicInput>
}
export declare class UploadCreateWithoutOwnerInput {
  id?: string
  name: string
  ext: string
  url: string
  permissions?: InstanceType<typeof UploadCreatepermissionsInput>
  createdAt?: Date | string
  event?: InstanceType<typeof EventCreateNestedOneWithoutUploadsInput>
  events?: InstanceType<typeof EventCreateNestedManyWithoutPicInput>
  accounts?: InstanceType<typeof AccountCreateNestedManyWithoutAvatarInput>
  chats?: InstanceType<typeof ChatCreateNestedManyWithoutPicInput>
  messages?: InstanceType<typeof MessageCreateNestedManyWithoutUploadsInput>
}
export declare class UploadCreateInput {
  id?: string
  name: string
  ext: string
  url: string
  permissions?: InstanceType<typeof UploadCreatepermissionsInput>
  createdAt?: Date | string
  owner: InstanceType<typeof AccountCreateNestedOneWithoutUploadsInput>
  event?: InstanceType<typeof EventCreateNestedOneWithoutUploadsInput>
  events?: InstanceType<typeof EventCreateNestedManyWithoutPicInput>
  accounts?: InstanceType<typeof AccountCreateNestedManyWithoutAvatarInput>
  chats?: InstanceType<typeof ChatCreateNestedManyWithoutPicInput>
  messages?: InstanceType<typeof MessageCreateNestedManyWithoutUploadsInput>
}
export declare class UploadCreatepermissionsInput {
  set: Array<keyof typeof Permission>
}
export declare class UploadGroupByArgs {
  where?: InstanceType<typeof UploadWhereInput>
  orderBy?: Array<UploadOrderByWithAggregationInput>
  by: Array<keyof typeof UploadScalarFieldEnum>
  having?: InstanceType<typeof UploadScalarWhereWithAggregatesInput>
  take?: number
  skip?: number
  _count?: InstanceType<typeof UploadCountAggregateInput>
  _min?: InstanceType<typeof UploadMinAggregateInput>
  _max?: InstanceType<typeof UploadMaxAggregateInput>
}
export declare class UploadGroupBy {
  id: string
  name: string
  ext: string
  url: string
  permissions?: Array<keyof typeof Permission>
  ownerId: string
  eventId?: string
  createdAt: Date | string
  _count?: InstanceType<typeof UploadCountAggregate>
  _min?: InstanceType<typeof UploadMinAggregate>
  _max?: InstanceType<typeof UploadMaxAggregate>
}
export declare class UploadListRelationFilter {
  every?: InstanceType<typeof UploadWhereInput>
  some?: InstanceType<typeof UploadWhereInput>
  none?: InstanceType<typeof UploadWhereInput>
}
export declare class UploadMaxAggregateInput {
  id?: true
  name?: true
  ext?: true
  url?: true
  ownerId?: true
  eventId?: true
  createdAt?: true
}
export declare class UploadMaxAggregate {
  id?: string
  name?: string
  ext?: string
  url?: string
  ownerId?: string
  eventId?: string
  createdAt?: Date | string
}
export declare class UploadMaxOrderByAggregateInput {
  id?: keyof typeof SortOrder
  name?: keyof typeof SortOrder
  ext?: keyof typeof SortOrder
  url?: keyof typeof SortOrder
  ownerId?: keyof typeof SortOrder
  eventId?: keyof typeof SortOrder
  createdAt?: keyof typeof SortOrder
}
export declare class UploadMinAggregateInput {
  id?: true
  name?: true
  ext?: true
  url?: true
  ownerId?: true
  eventId?: true
  createdAt?: true
}
export declare class UploadMinAggregate {
  id?: string
  name?: string
  ext?: string
  url?: string
  ownerId?: string
  eventId?: string
  createdAt?: Date | string
}
export declare class UploadMinOrderByAggregateInput {
  id?: keyof typeof SortOrder
  name?: keyof typeof SortOrder
  ext?: keyof typeof SortOrder
  url?: keyof typeof SortOrder
  ownerId?: keyof typeof SortOrder
  eventId?: keyof typeof SortOrder
  createdAt?: keyof typeof SortOrder
}
export declare class UploadNullableRelationFilter {
  is?: InstanceType<typeof UploadWhereInput>
  isNot?: InstanceType<typeof UploadWhereInput>
}
export declare class UploadOrderByRelationAggregateInput {
  _count?: keyof typeof SortOrder
}
export declare class UploadOrderByWithAggregationInput {
  id?: keyof typeof SortOrder
  name?: keyof typeof SortOrder
  ext?: keyof typeof SortOrder
  url?: keyof typeof SortOrder
  permissions?: keyof typeof SortOrder
  ownerId?: keyof typeof SortOrder
  eventId?: InstanceType<typeof SortOrderInput>
  createdAt?: keyof typeof SortOrder
  _count?: InstanceType<typeof UploadCountOrderByAggregateInput>
  _max?: InstanceType<typeof UploadMaxOrderByAggregateInput>
  _min?: InstanceType<typeof UploadMinOrderByAggregateInput>
}
export declare class UploadOrderByWithRelationInput {
  id?: keyof typeof SortOrder
  name?: keyof typeof SortOrder
  ext?: keyof typeof SortOrder
  url?: keyof typeof SortOrder
  permissions?: keyof typeof SortOrder
  ownerId?: keyof typeof SortOrder
  eventId?: InstanceType<typeof SortOrderInput>
  createdAt?: keyof typeof SortOrder
  owner?: InstanceType<typeof AccountOrderByWithRelationInput>
  event?: InstanceType<typeof EventOrderByWithRelationInput>
  events?: InstanceType<typeof EventOrderByRelationAggregateInput>
  accounts?: InstanceType<typeof AccountOrderByRelationAggregateInput>
  chats?: InstanceType<typeof ChatOrderByRelationAggregateInput>
  messages?: InstanceType<typeof MessageOrderByRelationAggregateInput>
}
export declare class UploadRelationFilter {
  is?: InstanceType<typeof UploadWhereInput>
  isNot?: InstanceType<typeof UploadWhereInput>
}
export declare class UploadScalarWhereWithAggregatesInput {
  AND?: Array<UploadScalarWhereWithAggregatesInput>
  OR?: Array<UploadScalarWhereWithAggregatesInput>
  NOT?: Array<UploadScalarWhereWithAggregatesInput>
  id?: InstanceType<typeof StringWithAggregatesFilter>
  name?: InstanceType<typeof StringWithAggregatesFilter>
  ext?: InstanceType<typeof StringWithAggregatesFilter>
  url?: InstanceType<typeof StringWithAggregatesFilter>
  permissions?: InstanceType<typeof EnumPermissionNullableListFilter>
  ownerId?: InstanceType<typeof StringWithAggregatesFilter>
  eventId?: InstanceType<typeof StringNullableWithAggregatesFilter>
  createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>
}
export declare class UploadScalarWhereInput {
  AND?: Array<UploadScalarWhereInput>
  OR?: Array<UploadScalarWhereInput>
  NOT?: Array<UploadScalarWhereInput>
  id?: InstanceType<typeof StringFilter>
  name?: InstanceType<typeof StringFilter>
  ext?: InstanceType<typeof StringFilter>
  url?: InstanceType<typeof StringFilter>
  permissions?: InstanceType<typeof EnumPermissionNullableListFilter>
  ownerId?: InstanceType<typeof StringFilter>
  eventId?: InstanceType<typeof StringNullableFilter>
  createdAt?: InstanceType<typeof DateTimeFilter>
}
export declare class UploadUncheckedCreateNestedManyWithoutEventInput {
  create?: Array<UploadCreateWithoutEventInput>
  connectOrCreate?: Array<UploadCreateOrConnectWithoutEventInput>
  createMany?: InstanceType<typeof UploadCreateManyEventInputEnvelope>
  connect?: Array<Prisma.AtLeast<UploadWhereUniqueInput, 'id'>>
}
export declare class UploadUncheckedCreateNestedManyWithoutMessagesInput {
  create?: Array<UploadCreateWithoutMessagesInput>
  connectOrCreate?: Array<UploadCreateOrConnectWithoutMessagesInput>
  connect?: Array<Prisma.AtLeast<UploadWhereUniqueInput, 'id'>>
}
export declare class UploadUncheckedCreateNestedManyWithoutOwnerInput {
  create?: Array<UploadCreateWithoutOwnerInput>
  connectOrCreate?: Array<UploadCreateOrConnectWithoutOwnerInput>
  createMany?: InstanceType<typeof UploadCreateManyOwnerInputEnvelope>
  connect?: Array<Prisma.AtLeast<UploadWhereUniqueInput, 'id'>>
}
export declare class UploadUncheckedCreateWithoutAccountsInput {
  id?: string
  name: string
  ext: string
  url: string
  permissions?: InstanceType<typeof UploadCreatepermissionsInput>
  ownerId: string
  eventId?: string
  createdAt?: Date | string
  events?: InstanceType<typeof EventUncheckedCreateNestedManyWithoutPicInput>
  chats?: InstanceType<typeof ChatUncheckedCreateNestedManyWithoutPicInput>
  messages?: InstanceType<
    typeof MessageUncheckedCreateNestedManyWithoutUploadsInput
  >
}
export declare class UploadUncheckedCreateWithoutChatsInput {
  id?: string
  name: string
  ext: string
  url: string
  permissions?: InstanceType<typeof UploadCreatepermissionsInput>
  ownerId: string
  eventId?: string
  createdAt?: Date | string
  events?: InstanceType<typeof EventUncheckedCreateNestedManyWithoutPicInput>
  accounts?: InstanceType<
    typeof AccountUncheckedCreateNestedManyWithoutAvatarInput
  >
  messages?: InstanceType<
    typeof MessageUncheckedCreateNestedManyWithoutUploadsInput
  >
}
export declare class UploadUncheckedCreateWithoutEventInput {
  id?: string
  name: string
  ext: string
  url: string
  permissions?: InstanceType<typeof UploadCreatepermissionsInput>
  ownerId: string
  createdAt?: Date | string
  events?: InstanceType<typeof EventUncheckedCreateNestedManyWithoutPicInput>
  accounts?: InstanceType<
    typeof AccountUncheckedCreateNestedManyWithoutAvatarInput
  >
  chats?: InstanceType<typeof ChatUncheckedCreateNestedManyWithoutPicInput>
  messages?: InstanceType<
    typeof MessageUncheckedCreateNestedManyWithoutUploadsInput
  >
}
export declare class UploadUncheckedCreateWithoutEventsInput {
  id?: string
  name: string
  ext: string
  url: string
  permissions?: InstanceType<typeof UploadCreatepermissionsInput>
  ownerId: string
  eventId?: string
  createdAt?: Date | string
  accounts?: InstanceType<
    typeof AccountUncheckedCreateNestedManyWithoutAvatarInput
  >
  chats?: InstanceType<typeof ChatUncheckedCreateNestedManyWithoutPicInput>
  messages?: InstanceType<
    typeof MessageUncheckedCreateNestedManyWithoutUploadsInput
  >
}
export declare class UploadUncheckedCreateWithoutMessagesInput {
  id?: string
  name: string
  ext: string
  url: string
  permissions?: InstanceType<typeof UploadCreatepermissionsInput>
  ownerId: string
  eventId?: string
  createdAt?: Date | string
  events?: InstanceType<typeof EventUncheckedCreateNestedManyWithoutPicInput>
  accounts?: InstanceType<
    typeof AccountUncheckedCreateNestedManyWithoutAvatarInput
  >
  chats?: InstanceType<typeof ChatUncheckedCreateNestedManyWithoutPicInput>
}
export declare class UploadUncheckedCreateWithoutOwnerInput {
  id?: string
  name: string
  ext: string
  url: string
  permissions?: InstanceType<typeof UploadCreatepermissionsInput>
  eventId?: string
  createdAt?: Date | string
  events?: InstanceType<typeof EventUncheckedCreateNestedManyWithoutPicInput>
  accounts?: InstanceType<
    typeof AccountUncheckedCreateNestedManyWithoutAvatarInput
  >
  chats?: InstanceType<typeof ChatUncheckedCreateNestedManyWithoutPicInput>
  messages?: InstanceType<
    typeof MessageUncheckedCreateNestedManyWithoutUploadsInput
  >
}
export declare class UploadUncheckedCreateInput {
  id?: string
  name: string
  ext: string
  url: string
  permissions?: InstanceType<typeof UploadCreatepermissionsInput>
  ownerId: string
  eventId?: string
  createdAt?: Date | string
  events?: InstanceType<typeof EventUncheckedCreateNestedManyWithoutPicInput>
  accounts?: InstanceType<
    typeof AccountUncheckedCreateNestedManyWithoutAvatarInput
  >
  chats?: InstanceType<typeof ChatUncheckedCreateNestedManyWithoutPicInput>
  messages?: InstanceType<
    typeof MessageUncheckedCreateNestedManyWithoutUploadsInput
  >
}
export declare class UploadUncheckedUpdateManyWithoutEventNestedInput {
  create?: Array<UploadCreateWithoutEventInput>
  connectOrCreate?: Array<UploadCreateOrConnectWithoutEventInput>
  upsert?: Array<UploadUpsertWithWhereUniqueWithoutEventInput>
  createMany?: InstanceType<typeof UploadCreateManyEventInputEnvelope>
  set?: Array<Prisma.AtLeast<UploadWhereUniqueInput, 'id'>>
  disconnect?: Array<Prisma.AtLeast<UploadWhereUniqueInput, 'id'>>
  delete?: Array<Prisma.AtLeast<UploadWhereUniqueInput, 'id'>>
  connect?: Array<Prisma.AtLeast<UploadWhereUniqueInput, 'id'>>
  update?: Array<UploadUpdateWithWhereUniqueWithoutEventInput>
  updateMany?: Array<UploadUpdateManyWithWhereWithoutEventInput>
  deleteMany?: Array<UploadScalarWhereInput>
}
export declare class UploadUncheckedUpdateManyWithoutEventInput {
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>
  name?: InstanceType<typeof StringFieldUpdateOperationsInput>
  ext?: InstanceType<typeof StringFieldUpdateOperationsInput>
  url?: InstanceType<typeof StringFieldUpdateOperationsInput>
  permissions?: InstanceType<typeof UploadUpdatepermissionsInput>
  ownerId?: InstanceType<typeof StringFieldUpdateOperationsInput>
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
}
export declare class UploadUncheckedUpdateManyWithoutMessagesNestedInput {
  create?: Array<UploadCreateWithoutMessagesInput>
  connectOrCreate?: Array<UploadCreateOrConnectWithoutMessagesInput>
  upsert?: Array<UploadUpsertWithWhereUniqueWithoutMessagesInput>
  set?: Array<Prisma.AtLeast<UploadWhereUniqueInput, 'id'>>
  disconnect?: Array<Prisma.AtLeast<UploadWhereUniqueInput, 'id'>>
  delete?: Array<Prisma.AtLeast<UploadWhereUniqueInput, 'id'>>
  connect?: Array<Prisma.AtLeast<UploadWhereUniqueInput, 'id'>>
  update?: Array<UploadUpdateWithWhereUniqueWithoutMessagesInput>
  updateMany?: Array<UploadUpdateManyWithWhereWithoutMessagesInput>
  deleteMany?: Array<UploadScalarWhereInput>
}
export declare class UploadUncheckedUpdateManyWithoutMessagesInput {
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>
  name?: InstanceType<typeof StringFieldUpdateOperationsInput>
  ext?: InstanceType<typeof StringFieldUpdateOperationsInput>
  url?: InstanceType<typeof StringFieldUpdateOperationsInput>
  permissions?: InstanceType<typeof UploadUpdatepermissionsInput>
  ownerId?: InstanceType<typeof StringFieldUpdateOperationsInput>
  eventId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
}
export declare class UploadUncheckedUpdateManyWithoutOwnerNestedInput {
  create?: Array<UploadCreateWithoutOwnerInput>
  connectOrCreate?: Array<UploadCreateOrConnectWithoutOwnerInput>
  upsert?: Array<UploadUpsertWithWhereUniqueWithoutOwnerInput>
  createMany?: InstanceType<typeof UploadCreateManyOwnerInputEnvelope>
  set?: Array<Prisma.AtLeast<UploadWhereUniqueInput, 'id'>>
  disconnect?: Array<Prisma.AtLeast<UploadWhereUniqueInput, 'id'>>
  delete?: Array<Prisma.AtLeast<UploadWhereUniqueInput, 'id'>>
  connect?: Array<Prisma.AtLeast<UploadWhereUniqueInput, 'id'>>
  update?: Array<UploadUpdateWithWhereUniqueWithoutOwnerInput>
  updateMany?: Array<UploadUpdateManyWithWhereWithoutOwnerInput>
  deleteMany?: Array<UploadScalarWhereInput>
}
export declare class UploadUncheckedUpdateManyWithoutOwnerInput {
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>
  name?: InstanceType<typeof StringFieldUpdateOperationsInput>
  ext?: InstanceType<typeof StringFieldUpdateOperationsInput>
  url?: InstanceType<typeof StringFieldUpdateOperationsInput>
  permissions?: InstanceType<typeof UploadUpdatepermissionsInput>
  eventId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
}
export declare class UploadUncheckedUpdateManyInput {
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>
  name?: InstanceType<typeof StringFieldUpdateOperationsInput>
  ext?: InstanceType<typeof StringFieldUpdateOperationsInput>
  url?: InstanceType<typeof StringFieldUpdateOperationsInput>
  permissions?: InstanceType<typeof UploadUpdatepermissionsInput>
  ownerId?: InstanceType<typeof StringFieldUpdateOperationsInput>
  eventId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
}
export declare class UploadUncheckedUpdateWithoutAccountsInput {
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>
  name?: InstanceType<typeof StringFieldUpdateOperationsInput>
  ext?: InstanceType<typeof StringFieldUpdateOperationsInput>
  url?: InstanceType<typeof StringFieldUpdateOperationsInput>
  permissions?: InstanceType<typeof UploadUpdatepermissionsInput>
  ownerId?: InstanceType<typeof StringFieldUpdateOperationsInput>
  eventId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  events?: InstanceType<typeof EventUncheckedUpdateManyWithoutPicNestedInput>
  chats?: InstanceType<typeof ChatUncheckedUpdateManyWithoutPicNestedInput>
  messages?: InstanceType<
    typeof MessageUncheckedUpdateManyWithoutUploadsNestedInput
  >
}
export declare class UploadUncheckedUpdateWithoutChatsInput {
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>
  name?: InstanceType<typeof StringFieldUpdateOperationsInput>
  ext?: InstanceType<typeof StringFieldUpdateOperationsInput>
  url?: InstanceType<typeof StringFieldUpdateOperationsInput>
  permissions?: InstanceType<typeof UploadUpdatepermissionsInput>
  ownerId?: InstanceType<typeof StringFieldUpdateOperationsInput>
  eventId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  events?: InstanceType<typeof EventUncheckedUpdateManyWithoutPicNestedInput>
  accounts?: InstanceType<
    typeof AccountUncheckedUpdateManyWithoutAvatarNestedInput
  >
  messages?: InstanceType<
    typeof MessageUncheckedUpdateManyWithoutUploadsNestedInput
  >
}
export declare class UploadUncheckedUpdateWithoutEventInput {
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>
  name?: InstanceType<typeof StringFieldUpdateOperationsInput>
  ext?: InstanceType<typeof StringFieldUpdateOperationsInput>
  url?: InstanceType<typeof StringFieldUpdateOperationsInput>
  permissions?: InstanceType<typeof UploadUpdatepermissionsInput>
  ownerId?: InstanceType<typeof StringFieldUpdateOperationsInput>
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  events?: InstanceType<typeof EventUncheckedUpdateManyWithoutPicNestedInput>
  accounts?: InstanceType<
    typeof AccountUncheckedUpdateManyWithoutAvatarNestedInput
  >
  chats?: InstanceType<typeof ChatUncheckedUpdateManyWithoutPicNestedInput>
  messages?: InstanceType<
    typeof MessageUncheckedUpdateManyWithoutUploadsNestedInput
  >
}
export declare class UploadUncheckedUpdateWithoutEventsInput {
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>
  name?: InstanceType<typeof StringFieldUpdateOperationsInput>
  ext?: InstanceType<typeof StringFieldUpdateOperationsInput>
  url?: InstanceType<typeof StringFieldUpdateOperationsInput>
  permissions?: InstanceType<typeof UploadUpdatepermissionsInput>
  ownerId?: InstanceType<typeof StringFieldUpdateOperationsInput>
  eventId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  accounts?: InstanceType<
    typeof AccountUncheckedUpdateManyWithoutAvatarNestedInput
  >
  chats?: InstanceType<typeof ChatUncheckedUpdateManyWithoutPicNestedInput>
  messages?: InstanceType<
    typeof MessageUncheckedUpdateManyWithoutUploadsNestedInput
  >
}
export declare class UploadUncheckedUpdateWithoutMessagesInput {
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>
  name?: InstanceType<typeof StringFieldUpdateOperationsInput>
  ext?: InstanceType<typeof StringFieldUpdateOperationsInput>
  url?: InstanceType<typeof StringFieldUpdateOperationsInput>
  permissions?: InstanceType<typeof UploadUpdatepermissionsInput>
  ownerId?: InstanceType<typeof StringFieldUpdateOperationsInput>
  eventId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  events?: InstanceType<typeof EventUncheckedUpdateManyWithoutPicNestedInput>
  accounts?: InstanceType<
    typeof AccountUncheckedUpdateManyWithoutAvatarNestedInput
  >
  chats?: InstanceType<typeof ChatUncheckedUpdateManyWithoutPicNestedInput>
}
export declare class UploadUncheckedUpdateWithoutOwnerInput {
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>
  name?: InstanceType<typeof StringFieldUpdateOperationsInput>
  ext?: InstanceType<typeof StringFieldUpdateOperationsInput>
  url?: InstanceType<typeof StringFieldUpdateOperationsInput>
  permissions?: InstanceType<typeof UploadUpdatepermissionsInput>
  eventId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  events?: InstanceType<typeof EventUncheckedUpdateManyWithoutPicNestedInput>
  accounts?: InstanceType<
    typeof AccountUncheckedUpdateManyWithoutAvatarNestedInput
  >
  chats?: InstanceType<typeof ChatUncheckedUpdateManyWithoutPicNestedInput>
  messages?: InstanceType<
    typeof MessageUncheckedUpdateManyWithoutUploadsNestedInput
  >
}
export declare class UploadUncheckedUpdateInput {
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>
  name?: InstanceType<typeof StringFieldUpdateOperationsInput>
  ext?: InstanceType<typeof StringFieldUpdateOperationsInput>
  url?: InstanceType<typeof StringFieldUpdateOperationsInput>
  permissions?: InstanceType<typeof UploadUpdatepermissionsInput>
  ownerId?: InstanceType<typeof StringFieldUpdateOperationsInput>
  eventId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  events?: InstanceType<typeof EventUncheckedUpdateManyWithoutPicNestedInput>
  accounts?: InstanceType<
    typeof AccountUncheckedUpdateManyWithoutAvatarNestedInput
  >
  chats?: InstanceType<typeof ChatUncheckedUpdateManyWithoutPicNestedInput>
  messages?: InstanceType<
    typeof MessageUncheckedUpdateManyWithoutUploadsNestedInput
  >
}
export declare class UploadUpdateManyMutationInput {
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>
  name?: InstanceType<typeof StringFieldUpdateOperationsInput>
  ext?: InstanceType<typeof StringFieldUpdateOperationsInput>
  url?: InstanceType<typeof StringFieldUpdateOperationsInput>
  permissions?: InstanceType<typeof UploadUpdatepermissionsInput>
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
}
export declare class UploadUpdateManyWithWhereWithoutEventInput {
  where: InstanceType<typeof UploadScalarWhereInput>
  data: InstanceType<typeof UploadUpdateManyMutationInput>
}
export declare class UploadUpdateManyWithWhereWithoutMessagesInput {
  where: InstanceType<typeof UploadScalarWhereInput>
  data: InstanceType<typeof UploadUpdateManyMutationInput>
}
export declare class UploadUpdateManyWithWhereWithoutOwnerInput {
  where: InstanceType<typeof UploadScalarWhereInput>
  data: InstanceType<typeof UploadUpdateManyMutationInput>
}
export declare class UploadUpdateManyWithoutEventNestedInput {
  create?: Array<UploadCreateWithoutEventInput>
  connectOrCreate?: Array<UploadCreateOrConnectWithoutEventInput>
  upsert?: Array<UploadUpsertWithWhereUniqueWithoutEventInput>
  createMany?: InstanceType<typeof UploadCreateManyEventInputEnvelope>
  set?: Array<Prisma.AtLeast<UploadWhereUniqueInput, 'id'>>
  disconnect?: Array<Prisma.AtLeast<UploadWhereUniqueInput, 'id'>>
  delete?: Array<Prisma.AtLeast<UploadWhereUniqueInput, 'id'>>
  connect?: Array<Prisma.AtLeast<UploadWhereUniqueInput, 'id'>>
  update?: Array<UploadUpdateWithWhereUniqueWithoutEventInput>
  updateMany?: Array<UploadUpdateManyWithWhereWithoutEventInput>
  deleteMany?: Array<UploadScalarWhereInput>
}
export declare class UploadUpdateManyWithoutMessagesNestedInput {
  create?: Array<UploadCreateWithoutMessagesInput>
  connectOrCreate?: Array<UploadCreateOrConnectWithoutMessagesInput>
  upsert?: Array<UploadUpsertWithWhereUniqueWithoutMessagesInput>
  set?: Array<Prisma.AtLeast<UploadWhereUniqueInput, 'id'>>
  disconnect?: Array<Prisma.AtLeast<UploadWhereUniqueInput, 'id'>>
  delete?: Array<Prisma.AtLeast<UploadWhereUniqueInput, 'id'>>
  connect?: Array<Prisma.AtLeast<UploadWhereUniqueInput, 'id'>>
  update?: Array<UploadUpdateWithWhereUniqueWithoutMessagesInput>
  updateMany?: Array<UploadUpdateManyWithWhereWithoutMessagesInput>
  deleteMany?: Array<UploadScalarWhereInput>
}
export declare class UploadUpdateManyWithoutOwnerNestedInput {
  create?: Array<UploadCreateWithoutOwnerInput>
  connectOrCreate?: Array<UploadCreateOrConnectWithoutOwnerInput>
  upsert?: Array<UploadUpsertWithWhereUniqueWithoutOwnerInput>
  createMany?: InstanceType<typeof UploadCreateManyOwnerInputEnvelope>
  set?: Array<Prisma.AtLeast<UploadWhereUniqueInput, 'id'>>
  disconnect?: Array<Prisma.AtLeast<UploadWhereUniqueInput, 'id'>>
  delete?: Array<Prisma.AtLeast<UploadWhereUniqueInput, 'id'>>
  connect?: Array<Prisma.AtLeast<UploadWhereUniqueInput, 'id'>>
  update?: Array<UploadUpdateWithWhereUniqueWithoutOwnerInput>
  updateMany?: Array<UploadUpdateManyWithWhereWithoutOwnerInput>
  deleteMany?: Array<UploadScalarWhereInput>
}
export declare class UploadUpdateOneRequiredWithoutChatsNestedInput {
  create?: InstanceType<typeof UploadCreateWithoutChatsInput>
  connectOrCreate?: InstanceType<typeof UploadCreateOrConnectWithoutChatsInput>
  upsert?: InstanceType<typeof UploadUpsertWithoutChatsInput>
  connect?: Prisma.AtLeast<UploadWhereUniqueInput, 'id'>
  update?: InstanceType<typeof UploadUpdateToOneWithWhereWithoutChatsInput>
}
export declare class UploadUpdateOneRequiredWithoutEventsNestedInput {
  create?: InstanceType<typeof UploadCreateWithoutEventsInput>
  connectOrCreate?: InstanceType<typeof UploadCreateOrConnectWithoutEventsInput>
  upsert?: InstanceType<typeof UploadUpsertWithoutEventsInput>
  connect?: Prisma.AtLeast<UploadWhereUniqueInput, 'id'>
  update?: InstanceType<typeof UploadUpdateToOneWithWhereWithoutEventsInput>
}
export declare class UploadUpdateOneWithoutAccountsNestedInput {
  create?: InstanceType<typeof UploadCreateWithoutAccountsInput>
  connectOrCreate?: InstanceType<
    typeof UploadCreateOrConnectWithoutAccountsInput
  >
  upsert?: InstanceType<typeof UploadUpsertWithoutAccountsInput>
  disconnect?: InstanceType<typeof UploadWhereInput>
  delete?: InstanceType<typeof UploadWhereInput>
  connect?: Prisma.AtLeast<UploadWhereUniqueInput, 'id'>
  update?: InstanceType<typeof UploadUpdateToOneWithWhereWithoutAccountsInput>
}
export declare class UploadUpdateToOneWithWhereWithoutAccountsInput {
  where?: InstanceType<typeof UploadWhereInput>
  data: InstanceType<typeof UploadUpdateWithoutAccountsInput>
}
export declare class UploadUpdateToOneWithWhereWithoutChatsInput {
  where?: InstanceType<typeof UploadWhereInput>
  data: InstanceType<typeof UploadUpdateWithoutChatsInput>
}
export declare class UploadUpdateToOneWithWhereWithoutEventsInput {
  where?: InstanceType<typeof UploadWhereInput>
  data: InstanceType<typeof UploadUpdateWithoutEventsInput>
}
export declare class UploadUpdateWithWhereUniqueWithoutEventInput {
  where: Prisma.AtLeast<UploadWhereUniqueInput, 'id'>
  data: InstanceType<typeof UploadUpdateWithoutEventInput>
}
export declare class UploadUpdateWithWhereUniqueWithoutMessagesInput {
  where: Prisma.AtLeast<UploadWhereUniqueInput, 'id'>
  data: InstanceType<typeof UploadUpdateWithoutMessagesInput>
}
export declare class UploadUpdateWithWhereUniqueWithoutOwnerInput {
  where: Prisma.AtLeast<UploadWhereUniqueInput, 'id'>
  data: InstanceType<typeof UploadUpdateWithoutOwnerInput>
}
export declare class UploadUpdateWithoutAccountsInput {
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>
  name?: InstanceType<typeof StringFieldUpdateOperationsInput>
  ext?: InstanceType<typeof StringFieldUpdateOperationsInput>
  url?: InstanceType<typeof StringFieldUpdateOperationsInput>
  permissions?: InstanceType<typeof UploadUpdatepermissionsInput>
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  owner?: InstanceType<typeof AccountUpdateOneRequiredWithoutUploadsNestedInput>
  event?: InstanceType<typeof EventUpdateOneWithoutUploadsNestedInput>
  events?: InstanceType<typeof EventUpdateManyWithoutPicNestedInput>
  chats?: InstanceType<typeof ChatUpdateManyWithoutPicNestedInput>
  messages?: InstanceType<typeof MessageUpdateManyWithoutUploadsNestedInput>
}
export declare class UploadUpdateWithoutChatsInput {
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>
  name?: InstanceType<typeof StringFieldUpdateOperationsInput>
  ext?: InstanceType<typeof StringFieldUpdateOperationsInput>
  url?: InstanceType<typeof StringFieldUpdateOperationsInput>
  permissions?: InstanceType<typeof UploadUpdatepermissionsInput>
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  owner?: InstanceType<typeof AccountUpdateOneRequiredWithoutUploadsNestedInput>
  event?: InstanceType<typeof EventUpdateOneWithoutUploadsNestedInput>
  events?: InstanceType<typeof EventUpdateManyWithoutPicNestedInput>
  accounts?: InstanceType<typeof AccountUpdateManyWithoutAvatarNestedInput>
  messages?: InstanceType<typeof MessageUpdateManyWithoutUploadsNestedInput>
}
export declare class UploadUpdateWithoutEventInput {
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>
  name?: InstanceType<typeof StringFieldUpdateOperationsInput>
  ext?: InstanceType<typeof StringFieldUpdateOperationsInput>
  url?: InstanceType<typeof StringFieldUpdateOperationsInput>
  permissions?: InstanceType<typeof UploadUpdatepermissionsInput>
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  owner?: InstanceType<typeof AccountUpdateOneRequiredWithoutUploadsNestedInput>
  events?: InstanceType<typeof EventUpdateManyWithoutPicNestedInput>
  accounts?: InstanceType<typeof AccountUpdateManyWithoutAvatarNestedInput>
  chats?: InstanceType<typeof ChatUpdateManyWithoutPicNestedInput>
  messages?: InstanceType<typeof MessageUpdateManyWithoutUploadsNestedInput>
}
export declare class UploadUpdateWithoutEventsInput {
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>
  name?: InstanceType<typeof StringFieldUpdateOperationsInput>
  ext?: InstanceType<typeof StringFieldUpdateOperationsInput>
  url?: InstanceType<typeof StringFieldUpdateOperationsInput>
  permissions?: InstanceType<typeof UploadUpdatepermissionsInput>
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  owner?: InstanceType<typeof AccountUpdateOneRequiredWithoutUploadsNestedInput>
  event?: InstanceType<typeof EventUpdateOneWithoutUploadsNestedInput>
  accounts?: InstanceType<typeof AccountUpdateManyWithoutAvatarNestedInput>
  chats?: InstanceType<typeof ChatUpdateManyWithoutPicNestedInput>
  messages?: InstanceType<typeof MessageUpdateManyWithoutUploadsNestedInput>
}
export declare class UploadUpdateWithoutMessagesInput {
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>
  name?: InstanceType<typeof StringFieldUpdateOperationsInput>
  ext?: InstanceType<typeof StringFieldUpdateOperationsInput>
  url?: InstanceType<typeof StringFieldUpdateOperationsInput>
  permissions?: InstanceType<typeof UploadUpdatepermissionsInput>
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  owner?: InstanceType<typeof AccountUpdateOneRequiredWithoutUploadsNestedInput>
  event?: InstanceType<typeof EventUpdateOneWithoutUploadsNestedInput>
  events?: InstanceType<typeof EventUpdateManyWithoutPicNestedInput>
  accounts?: InstanceType<typeof AccountUpdateManyWithoutAvatarNestedInput>
  chats?: InstanceType<typeof ChatUpdateManyWithoutPicNestedInput>
}
export declare class UploadUpdateWithoutOwnerInput {
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>
  name?: InstanceType<typeof StringFieldUpdateOperationsInput>
  ext?: InstanceType<typeof StringFieldUpdateOperationsInput>
  url?: InstanceType<typeof StringFieldUpdateOperationsInput>
  permissions?: InstanceType<typeof UploadUpdatepermissionsInput>
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  event?: InstanceType<typeof EventUpdateOneWithoutUploadsNestedInput>
  events?: InstanceType<typeof EventUpdateManyWithoutPicNestedInput>
  accounts?: InstanceType<typeof AccountUpdateManyWithoutAvatarNestedInput>
  chats?: InstanceType<typeof ChatUpdateManyWithoutPicNestedInput>
  messages?: InstanceType<typeof MessageUpdateManyWithoutUploadsNestedInput>
}
export declare class UploadUpdateInput {
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>
  name?: InstanceType<typeof StringFieldUpdateOperationsInput>
  ext?: InstanceType<typeof StringFieldUpdateOperationsInput>
  url?: InstanceType<typeof StringFieldUpdateOperationsInput>
  permissions?: InstanceType<typeof UploadUpdatepermissionsInput>
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>
  owner?: InstanceType<typeof AccountUpdateOneRequiredWithoutUploadsNestedInput>
  event?: InstanceType<typeof EventUpdateOneWithoutUploadsNestedInput>
  events?: InstanceType<typeof EventUpdateManyWithoutPicNestedInput>
  accounts?: InstanceType<typeof AccountUpdateManyWithoutAvatarNestedInput>
  chats?: InstanceType<typeof ChatUpdateManyWithoutPicNestedInput>
  messages?: InstanceType<typeof MessageUpdateManyWithoutUploadsNestedInput>
}
export declare class UploadUpdatepermissionsInput {
  set?: Array<keyof typeof Permission>
  push?: Array<keyof typeof Permission>
}
export declare class UploadUpsertWithWhereUniqueWithoutEventInput {
  where: Prisma.AtLeast<UploadWhereUniqueInput, 'id'>
  update: InstanceType<typeof UploadUpdateWithoutEventInput>
  create: InstanceType<typeof UploadCreateWithoutEventInput>
}
export declare class UploadUpsertWithWhereUniqueWithoutMessagesInput {
  where: Prisma.AtLeast<UploadWhereUniqueInput, 'id'>
  update: InstanceType<typeof UploadUpdateWithoutMessagesInput>
  create: InstanceType<typeof UploadCreateWithoutMessagesInput>
}
export declare class UploadUpsertWithWhereUniqueWithoutOwnerInput {
  where: Prisma.AtLeast<UploadWhereUniqueInput, 'id'>
  update: InstanceType<typeof UploadUpdateWithoutOwnerInput>
  create: InstanceType<typeof UploadCreateWithoutOwnerInput>
}
export declare class UploadUpsertWithoutAccountsInput {
  update: InstanceType<typeof UploadUpdateWithoutAccountsInput>
  create: InstanceType<typeof UploadCreateWithoutAccountsInput>
  where?: InstanceType<typeof UploadWhereInput>
}
export declare class UploadUpsertWithoutChatsInput {
  update: InstanceType<typeof UploadUpdateWithoutChatsInput>
  create: InstanceType<typeof UploadCreateWithoutChatsInput>
  where?: InstanceType<typeof UploadWhereInput>
}
export declare class UploadUpsertWithoutEventsInput {
  update: InstanceType<typeof UploadUpdateWithoutEventsInput>
  create: InstanceType<typeof UploadCreateWithoutEventsInput>
  where?: InstanceType<typeof UploadWhereInput>
}
export declare class UploadWhereUniqueInput {
  id?: string
  AND?: Array<UploadWhereInput>
  OR?: Array<UploadWhereInput>
  NOT?: Array<UploadWhereInput>
  name?: InstanceType<typeof StringFilter>
  ext?: InstanceType<typeof StringFilter>
  url?: InstanceType<typeof StringFilter>
  permissions?: InstanceType<typeof EnumPermissionNullableListFilter>
  ownerId?: InstanceType<typeof StringFilter>
  eventId?: InstanceType<typeof StringNullableFilter>
  createdAt?: InstanceType<typeof DateTimeFilter>
  owner?: InstanceType<typeof AccountRelationFilter>
  event?: InstanceType<typeof EventNullableRelationFilter>
  events?: InstanceType<typeof EventListRelationFilter>
  accounts?: InstanceType<typeof AccountListRelationFilter>
  chats?: InstanceType<typeof ChatListRelationFilter>
  messages?: InstanceType<typeof MessageListRelationFilter>
}
export declare class UploadWhereInput {
  AND?: Array<UploadWhereInput>
  OR?: Array<UploadWhereInput>
  NOT?: Array<UploadWhereInput>
  id?: InstanceType<typeof StringFilter>
  name?: InstanceType<typeof StringFilter>
  ext?: InstanceType<typeof StringFilter>
  url?: InstanceType<typeof StringFilter>
  permissions?: InstanceType<typeof EnumPermissionNullableListFilter>
  ownerId?: InstanceType<typeof StringFilter>
  eventId?: InstanceType<typeof StringNullableFilter>
  createdAt?: InstanceType<typeof DateTimeFilter>
  owner?: InstanceType<typeof AccountRelationFilter>
  event?: InstanceType<typeof EventNullableRelationFilter>
  events?: InstanceType<typeof EventListRelationFilter>
  accounts?: InstanceType<typeof AccountListRelationFilter>
  chats?: InstanceType<typeof ChatListRelationFilter>
  messages?: InstanceType<typeof MessageListRelationFilter>
}
export declare class Upload {
  id: string
  name: string
  ext: string
  url: string
  permissions: Array<keyof typeof Permission>
  ownerId: string
  eventId: string | null
  createdAt: Date
  owner?: InstanceType<typeof Account>
  event?: InstanceType<typeof Event> | null
  events?: Array<Event>
  accounts?: Array<Account>
  chats?: Array<Chat>
  messages?: Array<Message>
  _count?: InstanceType<typeof UploadCount>
}
export declare class UpsertOneUploadArgs {
  where: Prisma.AtLeast<UploadWhereUniqueInput, 'id'>
  create: InstanceType<typeof UploadCreateInput>
  update: InstanceType<typeof UploadUpdateInput>
}
